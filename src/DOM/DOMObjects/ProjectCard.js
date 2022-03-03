import { ui } from "../..";
import { Sidebar } from "../Sidebar";
import { CardElement } from "./CardElement";
import { itemCard } from "./ItemCard";

export const ProjectCard = (project) => {
	const projectCard = CardElement('div', 'projectCard');

	const cardText = CardElement('input', 'projectCardText', project.title);

	const cardLabel = CardElement('span', 'projectCardLabel', project.itemList.length);

	const deleteProject = CardElement('input', 'deleteProject', 'X');
	deleteProject.type = 'button';

	deleteProject.addEventListener('click', e => {
		e.target.parentElement.remove();
	});

	projectCard.addEventListener('click', () => {
		ui.content.reload();
		ui.content.currentProject.UItext(cardText.value)
		project.itemList.forEach(item => {
			ui.content.addItem(itemCard(item));
		});
	});

	cardText.addEventListener('change', () => {
		project.title = cardText.value;
	})

	projectCard.append(deleteProject, cardText, cardLabel);

	return Object.assign(projectCard, {});
}