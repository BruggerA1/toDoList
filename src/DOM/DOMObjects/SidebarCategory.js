import { CardElement } from "./CardElement";
import { UIelement } from "./UIelement";

export const SidebarCategory = (categoryText) => {
	const sidebarCategory = CardElement('div', 'sidebarCategory');
	const cardText = CardElement('span', 'categoryCardText', categoryText);
	const cardLabel = CardElement('span', 'categoryCardLabel', '0');

	sidebarCategory.append(cardText, cardLabel);

	return Object.assign(sidebarCategory, {cardLabel});
};