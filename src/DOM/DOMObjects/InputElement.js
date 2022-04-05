import { CardElement } from "./CardElement"

export const InputElement = (type = 'text', readOnly = 'false', className = null, text = null) => {
	const inputElement = (type == 'textarea') ? CardElement('textarea', className, text) :
	CardElement('input', className, text);
	if (type != 'textarea') inputElement.type = type;
	inputElement.readOnly = readOnly;

	return Object.assign(inputElement, {});
};