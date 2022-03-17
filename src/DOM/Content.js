import { AddButton } from "./DOMObjects/AddButton";
import { UIelement } from "./DOMObjects/UIelement";
import { Item } from "../Objects/Item";
import { ItemCard } from "./DOMObjects/ItemCard";
import { ui } from "..";
import { format, subDays } from "date-fns";

export const Content = () => {
	const content = UIelement('main', 'content');
	const addItemButton = AddButton('Item');
	const currentProject = UIelement('div', 'currentProject');
	let itemCount = 1;

	const addItem = () => {
		const projects = ui.sidebar.projectContainer;
		projects.projectList.forEach(project => {
			if (project.title == currentProject.innerText) {
				const newItem = Item(`item ${itemCount}`)
				content.append(ItemCard(newItem));
				project.addItem(newItem);
				itemCount++;
			};
		});
		projects.update();

		//testing
		const allCategory = ui.sidebar.all;
		allCategory.cardLabel.UItext(projects.projectList.getItems().length);
		const todayCategory = ui.sidebar.today;
		todayCategory.cardLabel.UItext(projects.projectList.getTodayItems().length);
		const weekCategory = ui.sidebar.week;
		weekCategory.cardLabel.UItext(projects.projectList.getWeekItems().length)

	};

	const reload = () => {
		content.UItext('');
		content.append(addItemButton, currentProject);
	};

	addItemButton.addEventListener('click', () => {
		addItem();
	});

	content.append(currentProject);

	return Object.assign(content, { addItemButton, currentProject, addItem, reload });
};