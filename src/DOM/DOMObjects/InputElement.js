import { CardElement } from "./CardElement"

export const InputElement = (type = 'text', readOnly = 'false', className = null, text = null) => {
	const inputElement = CardElement('input', className, text);
	inputElement.type = type;
	inputElement.readOnly = readOnly;
	
	return inputElement;
}