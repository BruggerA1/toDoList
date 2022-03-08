import { AddButton } from "./DOMObjects/AddButton";
import { UIelement } from "./DOMObjects/UIelement";
import { Item } from "../Objects/Item";
import { ItemCard } from "./DOMObjects/ItemCard";
import { ui } from "..";

export const Content = () => {
	const content = UIelement('main', 'content');
	const addItemButton = AddButton('Item');
	const currentProject = UIelement('div', 'currentProject');
	
	content.append(currentProject);

	const addItem = (item) => {
		content.append(item);
	};

	const reload = () => {
		content.UItext('');
		content.append(addItemButton, currentProject);
	};

	addItemButton.addEventListener('click', () => {
		ui.sidebar.projectContainer.projectList.forEach(project => {
			if (project.title == currentProject.innerText) {
				const newItem = Item(`item ${project.itemList.length + 1}`);
				addItem(ItemCard(newItem));

				project.addItem(newItem);
			};
		});
		ui.sidebar.projectContainer.update();
	});


	return Object.assign(content, { addItemButton, currentProject, addItem, reload });
};