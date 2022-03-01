import { CardElement } from "./CardElement";
import { PriorityRadio } from "./PriorityRadio";

export const itemCard = (item) => {
	const details = CardElement('details', 'itemCardDetails');
	const summary = CardElement('summary','itemCardSummary');
	const detailsContainer = CardElement('div', 'itemCardDetailsContainer');

	const itemCheckBox = (() => {
		const itemCheckBox = CardElement('input', 'itemCardCheckbox');

		itemCheckBox.type = 'checkbox';

		return itemCheckBox;
	})();

	const itemTitle = (() => {
		const itemTitle = CardElement('input', 'itemCardTitle', item.title);
		itemTitle.readOnly = true;

		return itemTitle;
	})();

	const itemDate = (() => {
		const itemDate = CardElement('input', 'itemCardDate', item.dueDate);

		itemDate.type = 'date';
		itemDate.readOnly = true;

		return itemDate;

	})();

	const itemPriority = (() => {
		const itemPriority = CardElement('div', 'itemPriority');

		const lowPriority = PriorityRadio('low', item.title);
		const medPriority = PriorityRadio('medium', item.title);
		const highPriority = PriorityRadio('high', item.title);

		(item.priority == 'high') ? highPriority.radioButton.checked = true 
			: (item.priority == 'medium') ? medPriority.radioButton.checked = true
				: lowPriority.radioButton.checked = true;

		itemPriority.append(lowPriority, medPriority , highPriority);

		return Object.assign(itemPriority, {lowPriority, medPriority, highPriority});
	})();

	const itemDescription = (() => {
		const itemDescription = CardElement('input', 'itemDescription', item.description);

		itemDescription.readOnly = 'true';

		return itemDescription;
	})();

	const itemNotes = (() => {
		const itemNotes = CardElement('textarea', 'itemNotes', item.notes);

		itemNotes.readOnly = 'true';

		return itemNotes;
	})();

	const itemEdit = (() => {
		const itemEdit = (() => {
			const itemEdit = CardElement('input', 'itemEdit', 'edit');
			itemEdit.type = 'button';

			itemEdit.addEventListener('click', () => {
				toggleEdit();
				updateItem();
			});

			return itemEdit;
		})();

		let editMode = false;

		
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

		

		return itemEdit;
	})();

	const itemDelete = (() => {
		const itemDelete = CardElement('input', 'itemDelete', 'delete');

		itemDelete.type = 'button';
		
		return itemDelete;
	})();

	summary.append(itemCheckBox, itemTitle, itemDate)
	
	detailsContainer.append(itemPriority, itemDescription, itemNotes,  itemEdit, itemDelete)

	details.append(summary, detailsContainer)
	
	return details;
};