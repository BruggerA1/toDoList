import { UIelement } from "./DOMObjects/UIelement";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../Objects/Project";

export const UI = () => {
	const UI = UIelement('body');
	const header = Header();
	const sidebar = Sidebar();
	const content = Content();
	const projectModal = ProjectModal();

	UI.append(header, sidebar, content);

	sidebar.addProjectButton.addEventListener('click', () => {
		(UI.lastChild.id == 'projectModal') ? projectModal.remove()
		: UI.append(projectModal);
	})
	
	projectModal.addProjectButton.addEventListener('click', () => {
		sidebar.projectContainer.addProject(Project(projectModal.input()));
		projectModal.hideModal();
	})
	
	projectModal.closeModal.addEventListener('click', () => {
		projectModal.remove();
	})


	// projectCard.addEventListener('click', () => {
	// 	project.itemList.forEach(item => console.log(item));
	// });

	return Object.assign(UI, { sidebar, content })
}