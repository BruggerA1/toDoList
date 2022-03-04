import { CardElement } from "./CardElement";
import { PriorityLabel } from "./PriorityLabel";
import { RadioButton } from "./PriorityButton";

export const PriorityRadio = (priorityLevel, itemTitle) => {
	const itemTitleText = itemTitle.split(' ').join('');
	const priorityContainer = CardElement('div', 'priorityContainer');
	const radioButton = RadioButton(priorityLevel, itemTitleText);
	const radioLabel = PriorityLabel(priorityLevel, itemTitleText);

	priorityContainer.append(radioButton, radioLabel);

	return Object.assign(priorityContainer, { radioButton });
};
