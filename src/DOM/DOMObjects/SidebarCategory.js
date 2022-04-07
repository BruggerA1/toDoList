import { ui } from "../..";
import { CardElement } from "./CardElement";
import { ItemCard } from "./ItemCard";

export const SidebarCategory = (categoryText) => {
	const sidebarCategory = CardElement('div', 'sidebarCategory');
	const cardText = CardElement('span', 'categoryCardText', categoryText);
	const cardLabel = CardElement('span', 'categoryCardLabel', '0');

	const updateLabel = () => {
		const projectList = ui.sidebar.projectContainer.projectList;

		(categoryText == 'All') ? cardLabel.UItext(projectList.getItems().length)
			: (categoryText == 'Today') ? cardLabel.UItext(projectList.getTodayItems().length)
				: cardLabel.UItext(projectList.getWeekItems().length);
	}

	//test
	const loadAllProjects = () => {
		const projectList = ui.sidebar.projectContainer.projectList;
		content.reload();

		content.currentProject.UItext(categoryText);

		projectList.getItems().forEach(item => content.append(ItemCard(item)));
	};

	const loadTodayProjects = () => {
		const projectList = ui.sidebar.projectContainer.projectList;
		content.reload();

		content.currentProject.UItext(categoryText);

		projectList.getTodayItems().forEach(item => content.append(ItemCard(item)));
	};

	const loadWeekProjects = () => {
		const projectList = ui.sidebar.projectContainer.projectList;
		content.reload();

		content.currentProject.UItext(categoryText);

		projectList.getWeekItems().forEach(item => content.append(ItemCard(item)));
	};

	sidebarCategory.addEventListener('click', () => {
		const projectList = ui.sidebar.projectContainer.projectList;
		(categoryText == 'All') ? loadAllProjects()
			: (categoryText == 'Today') ? loadTodayProjects()
				: loadWeekProjects();
	})

	sidebarCategory.append(cardText, cardLabel);

	return Object.assign(sidebarCategory, {cardLabel, updateLabel});
};