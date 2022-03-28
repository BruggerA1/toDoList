import { UIelement } from './UIelement';

export const AddButton = (label) => {
	const addButton = UIelement('button', `add${label}Button`);
	addButton.addClass('addButton');
	
	addButton.UItext(label);

	return Object.assign(addButton, {});
};
