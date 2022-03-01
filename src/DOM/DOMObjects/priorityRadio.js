import { CardElement } from "./CardElement";

export const PriorityRadio = (priorityLevel, itemTitle) => {
	const itemTitleText = itemTitle.split(' ').join('');

	const priorityContainer = (() => {
		const priorityContainer = CardElement('div', 'priorityContainer');

		return priorityContainer; 
	})();

	const radioButton = (() => {
		const radioButton = CardElement('input', 'priorityRadio');

		radioButton.type = 'radio';
		radioButton.disabled = true;

		radioButton.id = `${itemTitleText}-${priorityLevel}PriorityRadio`;
		radioButton.name = itemTitleText;

		return radioButton;
	})();

	const radioLabel = (() => {
		const radioLabel = CardElement('label', 'priorityLabel', priorityLevel);
		
		radioLabel.id = `${itemTitleText}-${priorityLevel}PriorityLabel`;
		radioLabel.htmlFor = radioButton.id;
	
		return radioLabel;
	})();

	priorityContainer.append(radioButton, radioLabel);

	return Object.assign(priorityContainer, {radioButton});
};