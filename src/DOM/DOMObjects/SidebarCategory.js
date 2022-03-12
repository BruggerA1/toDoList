import { CardElement } from "./CardElement";
import { UIelement } from "./UIelement";

export const SidebarCategory = (categoryText) => {
	const sidebarCategory = CardElement('div', 'sidebarCategory');
	const cardText = CardElement('span', 'categoryCardText', categoryText);
	const cardLabel = CardElement('span', 'categoryCardLabel', '###');

	sidebarCategory.append(cardText, cardLabel);

	return sidebarCategory;
};