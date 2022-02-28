import { DOMprototype } from "./DOMprototype";

export const UIelement = (element, id = null) => {
	const UIprototype = DOMprototype(element, id);
	
	const UItext = (text) => {
		(element == 'input') ? UIprototype.value = text : UIprototype.innerText = text;
	}
	
	const addClass = (...items) => {
		items.forEach(item => {
			UIprototype.classList.add(item)
		});
	};

	const removeClass = (...items) => {
		items.forEach(item => {
			UIprototype.classList.remove(item)
		});
	};
	
	return Object.assign(UIprototype, { UItext, addClass, removeClass })
}