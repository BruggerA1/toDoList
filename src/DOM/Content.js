import { AddButton } from "./DOMObjects/AddButton";
import { UIelement } from "./DOMObjects/UIelement";

export const Content = () => {
	const content = UIelement('main', 'content');
	const addItemButton = AddButton('Item');
	const currentProject = UIelement('div', 'currentProject');
	content.append(currentProject);

	const addItem = (item) => {
		content.append(item);
	}
	
	const reload = () => {
		content.UItext('');
		content.append(addItemButton, currentProject);
	};

	return Object.assign(content, {addItemButton, currentProject, addItem, reload});
}