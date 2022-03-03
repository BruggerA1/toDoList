import { CardElement } from "./CardElement";
import { PriorityRadio } from "./PriorityRadio";

export const ItemPriority = item => {
	const itemPriority = CardElement('div', 'itemPriority');

	const lowPriority = PriorityRadio('low', item.title);
	const medPriority = PriorityRadio('medium', item.title);
	const highPriority = PriorityRadio('high', item.title);

	(item.priority == 'high') ? highPriority.radioButton.checked = true 
		: (item.priority == 'medium') ? medPriority.radioButton.checked = true
			: lowPriority.radioButton.checked = true;

	itemPriority.append(lowPriority, medPriority , highPriority);

	return Object.assign(itemPriority, {lowPriority, medPriority, highPriority});
};