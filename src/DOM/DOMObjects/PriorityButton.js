import { InputElement } from "./InputElement"

export const RadioButton = (priorityLevel, itemTitleText) => {
	const radioButton = InputElement('radio', 'false', 'priorityRadio');

	radioButton.disabled = true;
	radioButton.id = `${itemTitleText}-${priorityLevel}PriorityRadio`;
	radioButton.name = itemTitleText;

	return radioButton;
}