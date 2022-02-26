export const DOMprototype = (element, id = null) => {
	const DOMprototype = (element == 'body') ? document.body : document.createElement(element);

	if (id != null) DOMprototype.id = id;
	
	return DOMprototype
}