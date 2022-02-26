import { UIelement } from "./DOMObjects/UIelement";

export const ProjectModal = () => {
	const projectModal = UIelement('div', 'projectModal');
	const closeModal = UIelement('button');
	const projectTextBox = UIelement('input');
	const addProjectButton = UIelement('button');

	const hideModal = () => {
		projectTextBox.value = null;
		projectModal.remove();
	}

	const input = () => {
		return projectTextBox.value;
	}

	closeModal.UItext('X');
	addProjectButton.UItext('Add Project');

	projectModal.append(closeModal, projectTextBox, addProjectButton)
	
	return Object.assign(projectModal, {projectTextBox, input, addProjectButton, closeModal, hideModal})
}