import { UIelement } from "./UIelement";

export const addButton = (label) => {
	const addButton = UIelement('button', `add${label}Button`);
	addButton.addClass('addButton');
	addButton.UItext(`+ ${label}`);


	return addButton;
};