import { CardElement } from "./CardElement";
import { priorityRadio } from "./priorityRadio";

export const itemCard = (item) => {
	const details = CardElement('details', 'itemCardDetails');

	const summary = CardElement('summary','itemCardSummary');

	const detailsContainer = CardElement('div', 'itemCardDetailsContainer');

	const itemCheckBox = CardElement('input', 'itemCardCheckbox');
	itemCheckBox.type = 'checkbox';

	const itemTitle = (() => {
		const itemTitle = CardElement('input', 'itemCardTitle', item.title);
		itemTitle.readOnly = 'true';

		return itemTitle;
	})();

	const itemDate = ((dueDate) => {
		const itemDate = CardElement('input', 'itemCardDate');
		itemDate.type = 'date';
		itemDate.value = dueDate;
		itemDate.readOnly = 'true';

		itemDate.addEventListener('change', () => {
		});

		return itemDate;
	})(item.dueDate);

	const itemPriority = ((priority) => {
		const itemPriority = CardElement('div', 'itemPriority');
		const lowPriority = priorityRadio('LOW', item.title);
		const medPriority = priorityRadio('MEDIUM', item.title);
		const highPriority = priorityRadio('HIGH', item.title);

		(priority == 'high') ? highPriority.radioButton.checked = true 
			: (priority == 'medium') ? medPriority.radioButton.checked = true
				: lowPriority.radioButton.checked = true;

		itemPriority.append(lowPriority, medPriority , highPriority);

		return Object.assign(itemPriority, {lowPriority, medPriority, highPriority});
	})(item.priority);


	const itemDescription = (() => {
		const itemDescription = CardElement('input', 'itemDescription', item.description);
		itemDescription.readOnly = 'true';

		return itemDescription;
	})();

	const itemNotes = CardElement('textarea', 'itemNotes', item.notes);
	itemNotes.readOnly = 'true';

	const itemEdit = (() => {
		const itemEdit = CardElement('button', 'itemEdit', 'edit');
		
		let editMode = false;

		itemEdit.addEventListener('click', () => {
			editMode = !editMode;
		
			if (editMode == true) {
				itemNotes.removeAttribute('readOnly');
				itemTitle.removeAttribute('readOnly');
				itemDescription.removeAttribute('readOnly');
				itemDate.removeAttribute('readOnly');
				itemPriority.lowPriority.radioButton.disabled = false;
				itemPriority.medPriority.radioButton.disabled = false;
				itemPriority.highPriority.radioButton.disabled = false;
			} else {
				itemNotes.readOnly = 'true';
				itemTitle.readOnly = 'true';
				itemDescription.readOnly = 'true';
				itemDate.readOnly = 'true';
				itemPriority.lowPriority.radioButton.disabled = true;
				itemPriority.medPriority.radioButton.disabled = true;
				itemPriority.highPriority.radioButton.disabled = true;

				item.title = itemTitle.value;
				item.dueDate = itemDate.value;
				item.priority = (itemPriority.highPriority.radioButton.checked == true) ? 'high'
					: (itemPriority.medPriority.radioButton.checked == true) ? 'medium'
						: 'low';
				item.description = itemDescription.value;
				item.notes = itemNotes.value;
			}

			return editMode;
		});

		return itemEdit;
	})();

	const itemDelete = CardElement('button', 'itemDelete', 'delete');

	summary.append(itemCheckBox, itemTitle, itemDate)
	
	detailsContainer.append(itemPriority, itemDescription, itemNotes,  itemEdit, itemDelete)

	details.append(summary, detailsContainer)
	
	return details;
};