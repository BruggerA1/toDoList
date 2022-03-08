import { ui } from "../..";
import { CardElement } from "./CardElement";
import { InputElement } from "./InputElement";
import { ItemPriority } from "./ItemPriority";

export const ItemCard = (item) => {
	const details = CardElement('details', 'itemCardDetails');
	const summary = CardElement('summary', 'itemCardSummary');
	const detailsContainer = CardElement('div', 'itemCardDetailsContainer');

	const itemCheckBox = InputElement('checkbox', 'false', 'itemCardCheckBox');
	const itemTitle = InputElement('text', 'true', 'itemCardTitle', item.title);
	const itemDate = InputElement('date', 'true', 'itemCardDate', item.dueDate);
	const itemPriority = ItemPriority(item);
	const itemDescription = InputElement('text', 'true', 'itemDescription', item.description);
	const itemNotes = InputElement('textarea', 'true', 'itemNotes', item.notes);
	const itemEdit = InputElement('button', 'true', 'itemEdit', 'edit');
	const itemDelete = InputElement('button', 'true', 'itemDelete', 'delete');

	let editMode = false;

	const toggleEdit = () => {
		editMode = !editMode;

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

	itemEdit.addEventListener('click', () => {
		toggleEdit();
		updateItem();
	});

	itemDelete.addEventListener('click', (e) => {
		const currentProject = ui.content.currentProject.innerText;
		const projectList = ui.sidebar.projectContainer.projectList;

		projectList.forEach(project => {
			if (project.title == currentProject) {
				const projIndex = projectList.indexOf(project);
				const itemList = projectList[projIndex].itemList;
				const currentItemCard = e.target.parentElement.parentElement;
				const currentItemTitle = e.target.parentElement.parentElement.childNodes[0].childNodes[1].value;
				itemList.forEach(item => {
					if (item.title == currentItemTitle) {
						console.log(`${item.title} match`);
						const itemIndex = itemList.indexOf(item);
						console.log(itemIndex);
						itemList.splice(itemIndex, 1);
					}
				});
				currentItemCard.remove();
				ui.sidebar.projectContainer.update();
			};
		})
	});

	summary.append(itemCheckBox, itemTitle, itemDate);
	detailsContainer.append(itemPriority, itemDescription, itemNotes, itemEdit, itemDelete);

	details.append(summary, detailsContainer);

	return Object.assign(details, {});
};