import { CardElement } from "./CardElement";

export const itemCard = (item) => {
	const details = CardElement('details', 'itemCardDetails');

	const summary = CardElement('summary','itemCardSummary');

	const detailsContainer = CardElement('div', 'itemCardDetailsContainer');

	const itemCheckBox = CardElement('input', 'itemCardCheckbox');
	itemCheckBox.type = 'checkbox';

	const itemTitle = CardElement('div', 'itemCardTitle' , item.title);

	const itemDate = ((dueDate) => {
		const itemDate = CardElement('input', 'itemCardDate');
		itemDate.type = 'date';
		itemDate.value = dueDate;
		itemDate.readOnly = 'true';

		itemDate.addEventListener('change', () => {
		});

		return itemDate;
	})(item.dueDate);

	const itemPriority = CardElement('div', 'itemPriority', item.priority);

	const itemDescription = CardElement('div', 'itemDescription', item.description);

	const itemNotes = CardElement('textarea', 'itemNotes', item.notes);
	itemNotes.readOnly = 'true';

	const itemEdit = (() => {
		const itemEdit = CardElement('button', 'itemEdit', 'edit');
		
		let editMode = false;

		itemEdit.addEventListener('click', () => {
			editMode = !editMode;
		
			(editMode == true) ? itemNotes.removeAttribute('readOnly') : itemNotes.readOnly = 'true';

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