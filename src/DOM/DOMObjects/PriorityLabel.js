import { CardElement } from "./CardElement";

export const PriorityLabel = (priorityLevel, itemTitleText) => {
	const priorityLabel = CardElement('label', 'priorityLabel', priorityLevel);

	priorityLabel.id = `${itemTitleText}-${priorityLevel}PriorityLabel`;
	priorityLabel.htmlFor = `${itemTitleText}-${priorityLevel}PriorityRadio`;

	return Object.assign(priorityLabel, {});
};