import { ui } from "../..";
import { CardElement } from "./CardElement";
import { InputElement } from "./InputElement";
import { ItemCard } from "./ItemCard";

export const ProjectCard = (project) => {
	const projectCard = CardElement('div', 'projectCard');
	const cardText = CardElement('input', 'projectCardText', project.title);
	const cardLabel = CardElement('span', 'projectCardLabel', project.itemList.length);
	const deleteProjectButton = InputElement('button', 'false', 'deleteProject', '');
	const sidebar = ui.sidebar;
	const content = ui.content;
	const projects = ui.sidebar.projectContainer.projectList;

	const updateTitle = () => {
		project.title = cardText.value;
	};

	const loadProject = () => {
		content.reload();
		content.currentProject.UItext(cardText.value);
		project.itemList.forEach(item => content.append(ItemCard(item)));
	};

	const deleteProject = () => {
		projects.forEach((project, index, array) => { 
			if (project.title == cardText.value) array.splice(index,1);
		});

		projectCard.remove();

		sidebar.updateCategories();
		
		if(content.currentProject.innerText == cardText.value) content.UItext('');
	};

	deleteProjectButton.addEventListener('click', () => {
		deleteProject();
	});

	cardText.addEventListener('change', () => {
		updateTitle();
		loadProject();
	});

	cardLabel.addEventListener('click', () => {
		loadProject();
	});

	projectCard.append(deleteProjectButton, cardText, cardLabel);

	return Object.assign(projectCard, {});
};