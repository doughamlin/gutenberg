/**
 * Create an event emitter.
 *
 * @return {import("../types").DataEmitter} Emitter.
 */
export function createEmitter() {
	let isPaused = false;
	let isPending = false;
	const listeners = new Set();

	const notifyListeners = () => {
		// Some listeners might add new listeners while we're
		// iterating over the set of existing listeners. We
		// want to avoid calling them on this loop through the
		// set. Since Set iteration occurs in order or insertion
		// we can add a unique symbol to indicate the last existing
		// listener and stop iterating when we come to it. All
		// listeners added after the symbol _must_ have been
		// added while iterating, and we can skip them until
		// the next time this is called.
		const existingEndToken = () => {};
		listeners.add( existingEndToken );
		for ( const listener of listeners ) {
			if ( existingEndToken === listener ) {
				// Stop processing listeners added during this call to notify.
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
