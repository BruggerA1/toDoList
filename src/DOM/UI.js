import { UIelement } from "./DOMObjects/UIelement";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../Objects/Project";
import { itemCard } from "./DOMObjects/ItemCard";
import { Item } from "../Objects/Item";

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
	
	content.addItemButton.addEventListener('click', () => {
		const newItem = Item();
		content.addItem(itemCard(newItem));
		sidebar.projectContainer.projectList.forEach(project => {
			if (project.title == content.currentProject.innerText) {
				project.addItem(newItem);
			}
		})
		sidebar.projectContainer.update()
	})

	projectModal.addProjectButton.addEventListener('click', () => {
		sidebar.projectContainer.addProject(Project(projectModal.input()));
		projectModal.hideModal();
	})
	
	projectModal.closeModal.addEventListener('click', () => {
		projectModal.remove();
	})

	return Object.assign(UI, { sidebar, content })
}