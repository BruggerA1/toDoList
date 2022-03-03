import { CardElement } from "./CardElement";
import { RadioButton } from "./PriorityButton";
import { PriorityLabel } from "./PriorityLabel";

export const PriorityRadio = (priorityLevel, itemTitle) => {
	const itemTitleText = itemTitle.split(' ').join('');

	const priorityContainer = CardElement('div', 'priorityContainer');

	const radioButton = RadioButton(priorityLevel, itemTitleText)

	const radioLabel = PriorityLabel(priorityLevel, itemTitleText);

	priorityContainer.append(radioButton, radioLabel);

	return Object.assign(priorityContainer, {radioButton});
};