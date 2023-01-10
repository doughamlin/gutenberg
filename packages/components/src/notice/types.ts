type CommonNoticeActionProps = {
	label: string;
	className?: string;
	noDefaultClasses?: boolean;
	variant?: 'primary';
};
type NoticeActionWithURL = CommonNoticeActionProps & { url: string };
type NoticeActionWithOnClick = CommonNoticeActionProps & {
	onClick: () => void;
};

export type NoticeProps = {
	/**
	 * The displayed message of a notice. Also used as the spoken message for
	 * assistive technology, unless `spokenMessage` is provided as an alternative message.
	 */
	children: string;
	/**
	 * Used to provide a custom spoken message in place of the `children` default.
	 *
	 * @default `children`
	 */
	spokenMessage?: string;
	/**
	 * Can be warning (yellow), success (green), error (red), or info.
	 *
	 * @default 'info'
	 */
	status?: 'warning' | 'success' | 'error' | 'info';
	/**
	 * Function called when dismissing the notice
	 *
	 * @default noop
	 */
	onRemove?: () => void;
	/**
	 * A politeness level for the notice's spoken message. Should be provided as
	 * one of the valid options for an aria-live attribute value. If not provided,
	 * a sensible default is used based on the notice status. Note that this
	 * value should be considered a suggestion; assistive technologies may
	 * override it based on internal heuristics.
	 */
	politeness?: 'polite' | 'assertive';
	/**
	 * Whether the notice should be dismissible or not
	 *
	 * @default true
	 */
	isDismissible?: boolean;
	/**
	 * Callback function which is executed when the notice is dismissed.
	 * It is distinct from onRemove, which looks like a callback but is actually
	 * the function to call to remove the notice from the UI.
	 *
	 * @default noop
	 */
	onDismiss?: () => void;
	/**
	 * An array of action objects.
	 */
	actions: Array< NoticeActionWithURL | NoticeActionWithOnClick >;
};
