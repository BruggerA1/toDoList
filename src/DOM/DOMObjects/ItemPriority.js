import { CardElement } from "./CardElement";
import { PriorityRadio } from "./PriorityRadio";

export const ItemPriority = item => {
	const itemPriority = CardElement('div', 'itemPriority');

	const lowPriority = PriorityRadio('Low', item.title);
	const medPriority = PriorityRadio('Medium', item.title);
	const highPriority = PriorityRadio('High', item.title);

	(item.priority == 'High') ? highPriority.radioButton.checked = true
		: (item.priority == 'Medium') ? medPriority.radioButton.checked = true
			: lowPriority.radioButton.checked = true;

	itemPriority.append(lowPriority, medPriority, highPriority);

	return Object.assign(itemPriority, { lowPriority, medPriority, highPriority });
};