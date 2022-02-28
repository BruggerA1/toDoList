import { CardElement } from "./CardElement";

export const priorityRadio = (priorityLevel, itemTitle) => {
	const itemTitleNoSpaces = itemTitle.split(' ').join('');

	const priorityContainer = CardElement('div', 'priorityContainer');
	priorityContainer.id = `${priorityLevel}PriorityContainer`;

	const radioButton = CardElement('input', 'priorityRadioButton');
	radioButton.type = 'radio';
	radioButton.id = `${itemTitleNoSpaces}-${priorityLevel}PriorityRadioButton`;
	radioButton.setAttribute('name', itemTitleNoSpaces);
	radioButton.disabled = true;

	const radioLabel = CardElement('label', 'priorityRadioLabel', priorityLevel);
	radioLabel.id = `${itemTitleNoSpaces}-${priorityLevel}PriorityRadioLabel`;
	radioLabel.htmlFor = radioButton.id;

	priorityContainer.append(radioButton, radioLabel);

	return Object.assign(priorityContainer, {radioButton});
};