import { CardElement } from "./CardElement";
import { InputElement } from "./InputElement";
import { ItemCard } from "./ItemCard";
import { ui } from "../..";

export const ProjectCard = (project) => {
	const projectCard = CardElement('div', 'projectCard');
	const cardText = CardElement('input', 'projectCardText', project.title);
	const cardLabel = CardElement('span', 'projectCardLabel', project.itemList.length);
	const deleteProject = InputElement('button', 'false', 'deleteProject', 'X');

	deleteProject.addEventListener('click', e => {
		ui.sidebar.projectContainer.projectList.forEach(project => {
			if (project.title == e.target.parentElement.childNodes[1].value) {
				ui.sidebar.projectContainer.projectList.splice(ui.sidebar.projectContainer.projectList.indexOf(project),1);
			}
		})
		e.target.parentElement.remove();
	});

	cardText.addEventListener('change', () => {
		project.title = cardText.value;
	});

	projectCard.addEventListener('click', () => {
		ui.content.reload();
		ui.content.currentProject.UItext(cardText.value);
		project.itemList.forEach(item => {
			ui.content.addItem(ItemCard(item));
		});
	});

	projectCard.append(deleteProject, cardText, cardLabel);

	return Object.assign(projectCard, {});
};