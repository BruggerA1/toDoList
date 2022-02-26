import { addButton } from "./DOMObjects/addButton";
import { UIelement } from "./DOMObjects/UIelement";

export const Content = () => {
	const content = UIelement('main', 'content');
	const addItemButton = addButton('Item');
	content.append(addItemButton);

	const addItem = (item) => {
		content.append(item);
	}
	
	const reload = () => {
		content.UItext('');
		content.append(addItemButton);
	};

	return Object.assign(content, {addItem, reload});
}