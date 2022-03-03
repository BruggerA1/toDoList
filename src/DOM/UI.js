import { UIelement } from "./DOMObjects/UIelement";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Project } from "../Objects/Project";
import { itemCard } from "./DOMObjects/ItemCard";
import { Item } from "../Objects/Item";

export const UI = () => {
	const UI = UIelement('body');
	const header = Header();
	const sidebar = Sidebar();
	const content = Content();

	UI.append(header, sidebar, content);

	sidebar.addProjectButton.addEventListener('click', () => {
		const newProj = Project(`Project ${sidebar.projectContainer.projectList.length + 1}`)
		sidebar.projectContainer.addProject(newProj);
	})
	
	content.addItemButton.addEventListener('click', () => {
		sidebar.projectContainer.projectList.forEach(project => {
			if (project.title == content.currentProject.innerText) {
				const newItem = Item(`item ${project.itemList.length + 1}`);
				content.addItem(itemCard(newItem));
		
				project.addItem(newItem);
			}
		})
		sidebar.projectContainer.update()
	})

	return Object.assign(UI, { sidebar, content })
}