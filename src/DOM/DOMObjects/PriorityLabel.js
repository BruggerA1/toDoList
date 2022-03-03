import { CardElement } from "./CardElement";

export const PriorityLabel = (priorityLevel, itemTitleText) => {
	const priorityLabel = CardElement('label', 'priorityLabel', priorityLevel);
	
	priorityLabel.id = `${itemTitleText}-${priorityLevel}PriorityLabel`;
	priorityLabel.htmlFor = priorityLabel.id;

	return priorityLabel;
};