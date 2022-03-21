import { ui } from "../..";
import { CardElement } from "./CardElement";

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

	sidebarCategory.append(cardText, cardLabel);

	return Object.assign(sidebarCategory, {cardLabel, updateLabel});
};