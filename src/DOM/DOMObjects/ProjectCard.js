import { ui } from "../..";
import { CardElement } from "./CardElement";
import { InputElement } from "./InputElement";
import { ItemCard } from "./ItemCard";

export const ProjectCard = (project) => {
	const projectCard = CardElement('div', 'projectCard');
	const cardText = CardElement('input', 'projectCardText', project.title);
	const cardLabel = CardElement('span', 'projectCardLabel', project.itemList.length);
	const deleteProjectButton = InputElement('button', 'false', 'deleteProject', 'X');

	const updateTitle = () => {
		project.title = cardText.value;
	};

	const loadProject = () => {
		const content = ui.content;

		content.reload();

		content.currentProject.UItext(cardText.value);

		project.itemList.forEach(item => content.append(ItemCard(item)));
	};

	const deleteProject = () => {
		const projects = ui.sidebar.projectContainer.projectList;

		projects.forEach((project, index, array) => {
			if (project.title == cardText.value) array.splice(index,1);
		});

		projectCard.remove();
	};

	deleteProjectButton.addEventListener('click', () => {
		deleteProject();
	});

	cardText.addEventListener('change', () => {
		updateTitle();
	});

	projectCard.addEventListener('click', () => {
		loadProject();
	});

	projectCard.append(deleteProjectButton, cardText, cardLabel);

	return Object.assign(projectCard, {});
};