import { UIelement } from "./UIelement";

export const CardElement = (element, className = null, text = null) => {
	const CEprototype = UIelement(element);

	if (className != null) CEprototype.addClass(className);

	if (text != null) CEprototype.UItext(text);
	

	return Object.assign(CEprototype, {});
};