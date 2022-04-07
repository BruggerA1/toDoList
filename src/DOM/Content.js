import { AddButton } from "./DOMObjects/AddButton";
import { UIelement } from "./DOMObjects/UIelement";
import { Item } from "../Objects/Item";
import { ItemCard } from "./DOMObjects/ItemCard";
import { ui } from "..";

export const Content = () => {
	const content = UIelement('main', 'content');
	const addItemButton = AddButton('item');
	const currentProject = UIelement('div', 'currentProject');
	const itemCardContainer = UIelement('div', 'itemCardContainer');

	let itemCount = 1;

	const addItem = () => {
		const projects = ui.sidebar.projectContainer;
		const sidebar = ui.sidebar;

		projects.projectList.forEach(project => {
			if (project.title == currentProject.innerText) {
				const newItem = Item(`item ${itemCount}`)
				itemCardContainer.append(ItemCard(newItem));
				project.addItem(newItem);
				itemCount++;
			};
		});
		projects.update();
		sidebar.updateCategories();
	};

	const reload = () => {
		content.UItext('');
		itemCardContainer.UItext('');
		content.append(addItemButton, currentProject, itemCardContainer);
	};

	addItemButton.addEventListener('click', () => {
		addItem();
	});

	content.append(currentProject);

	return Object.assign(content, { addItemButton, currentProject, itemCardContainer, addItem, reload, });
};