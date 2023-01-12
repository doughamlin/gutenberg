/**
 * Create an event emitter.
 *
 * @return {import("../types").DataEmitter} Emitter.
 */
export function createEmitter() {
	let isPaused = false;
	let isPending = false;
	const listeners = new Set();
	const existingEndToken = () => {};

	const notifyListeners = () => {
		// Some listeners might add new listeners while we're
		// iterating; we want to avoid calling them now though.
		// Since Set iteration occurs in insertion order we can
		// add a unique symbol to indicate the last existing
		// listener and stop iterating once we find it. All
		// listeners added after the symbol _must_ have been
		// added while iterating, and we can skip them until
		// the next time this is called.

		// Make sure if it's already in the set that we remove it.
		// It needs to be the last-inserted item in the set.
		listeners.delete( existingEndToken );
		listeners.add( existingEndToken );
		for ( const listener of listeners ) {
			if ( existingEndToken === listener ) {
				break;
			}
			listener();
		}
		listeners.delete( existingEndToken );
	};

	return {
		get isPaused() {
			return isPaused;
		},

		subscribe( listener ) {
			listeners.add( listener );
			return () => listeners.delete( listener );
		},

		pause() {
			isPaused = true;
		},

		resume() {
			isPaused = false;
			if ( isPending ) {
				isPending = false;
				notifyListeners();
			}
		},

		emit() {
			if ( isPaused ) {
				isPending = true;
				return;
			}
			notifyListeners();
		},
	};
}
