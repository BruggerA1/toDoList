import { ui } from "../..";
import { CardElement } from "./CardElement";
import { itemCard } from "./ItemCard";

export const ProjectCard = (project) => {
	const projectCard = CardElement('div', 'projectCard');

	const cardText = CardElement('span', 'projectCardText', project.title);

	const cardLabel = CardElement('span', 'projectCardLabel', project.itemList.length);

	const deleteProject = CardElement('button', 'deleteProject', 'X');

	deleteProject.addEventListener('click', e => e.target.parentElement.remove());

	projectCard.addEventListener('click', () => {
		ui.content.reload();
		ui.content.currentProject.UItext(cardText.innerText)
		project.itemList.forEach(item => {
			ui.content.addItem(itemCard(item));
		});
	});

	projectCard.append(deleteProject, cardText, cardLabel);

	return Object.assign(projectCard, {});
}