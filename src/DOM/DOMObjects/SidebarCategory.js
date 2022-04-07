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

	const loadCategory = () => {
		const projectList = ui.sidebar.projectContainer.projectList;

		content.reload();
		content.currentProject.UItext(categoryText);

		(categoryText == 'All') ? projectList.getItems().forEach(item => content.itemCardContainer.append(ItemCard(item)))
			: (categoryText == 'Today') ? projectList.getTodayItems().forEach(item => content.itemCardContainer.append(ItemCard(item)))
				: projectList.getWeekItems().forEach(item => content.itemCardContainer.append(ItemCard(item)))
	};

	sidebarCategory.addEventListener('click', () => {
		loadCategory();
	})

	sidebarCategory.append(cardText, cardLabel);

	return Object.assign(sidebarCategory, {cardLabel, updateLabel});
};