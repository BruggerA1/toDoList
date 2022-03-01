import { UIelement } from "./DOMObjects/UIelement";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { ProjectModal } from "./ProjectModal";
import { Project } from "../Objects/Project";
import { ui } from "..";
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
		ui.content.addItem(itemCard(newItem));
		console.log(ui.content.currentProject.innerText);
		console.log(ui.sidebar.projectContainer.projectList);
		ui.sidebar.projectContainer.projectList.forEach(project => {
			if (project.title == ui.content.currentProject.innerText) {
				project.addItem(newItem);
			}
		})
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