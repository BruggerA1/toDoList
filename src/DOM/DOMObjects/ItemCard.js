import { CardElement } from "./CardElement";
import { InputElement } from "./InputElement";
import { ItemPriority } from "./ItemPriority";

export const itemCard = (item) => {
	const details = CardElement('details', 'itemCardDetails');
	const summary = CardElement('summary','itemCardSummary');
	const detailsContainer = CardElement('div', 'itemCardDetailsContainer');

	const itemCheckBox = InputElement('checkbox', 'false','itemCardCheckBox');
	const itemTitle = InputElement('text', 'true','itemCardTitle', item.title);
	const itemDate = InputElement('date', 'true', 'itemCardDate', item.dueDate);
	const itemPriority = ItemPriority(item);
	const itemDescription = InputElement('text','true', 'itemDescription', item.description);
	const itemNotes = InputElement('textarea', 'true', 'itemNotes', item.notes);
	const itemEdit = InputElement('button', 'true', 'itemEdit', 'edit');
	const itemDelete = InputElement('button', 'true', 'itemDelete', 'delete');

	let editMode = false;

	itemEdit.addEventListener('click', () => {
		toggleEdit();
		updateItem();
	});

	const toggleEdit = () => {
		const input = [
			itemTitle,
			itemDate,
			itemDescription,
			itemNotes,
		];
		const radio = [
			itemPriority.lowPriority.radioButton,
			itemPriority.medPriority.radioButton,
			itemPriority.highPriority.radioButton,
		];

		editMode = !editMode;

		if (editMode == true) {
			input.forEach(item => item.readOnly = false);
			radio.forEach(item => item.disabled = false);
		} else {
			input.forEach(item => item.readOnly = true);
			radio.forEach(item => item.disabled = true);
		};
	};

	const updateItem = () => {
		item.title = itemTitle.value;
		item.dueDate = itemDate.value;
		item.priority = (itemPriority.highPriority.radioButton.checked == true) ? 'high'
			: (itemPriority.medPriority.radioButton.checked == true) ? 'medium'
				: 'low';
		item.description = itemDescription.value;
		item.notes = itemNotes.value;
	};

	summary.append(itemCheckBox, itemTitle, itemDate);
	detailsContainer.append(itemPriority, itemDescription, itemNotes,  itemEdit, itemDelete);
	details.append(summary, detailsContainer);
	
	return details;
};