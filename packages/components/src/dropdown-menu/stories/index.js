/**
 * Internal dependencies
 */
import DropdownMenu from '../';

/**
 * WordPress dependencies
 */
import { menu, arrowUp, arrowDown, chevronDown } from '@wordpress/icons';

export default {
	title: 'Components/DropdownMenu',
	component: DropdownMenu,
	argTypes: {
		icon: {
			options: [ 'menu', 'chevronDown' ],
			mapping: { menu, chevronDown },
			control: { type: 'select' },
		},
	},
	parameters: {
		controls: { expanded: true },
		docs: { source: { state: 'open' } },
	},
};

const Template = ( props ) => <DropdownMenu { ...props } />;

export const Default = Template.bind( {} );
Default.args = {
	label: 'Select a direction.',
	icon: menu,
	controls: [
		{
			title: 'First Menu Item Label',
			icon: arrowUp,
		},
		{
			title: 'Second Menu Item Label',
			icon: arrowDown,
		},
	],
	toggleProps: {
		showTooltip: true,
	},
};
