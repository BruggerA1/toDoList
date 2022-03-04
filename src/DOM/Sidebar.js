import { UIelement } from "./DOMObjects/UIelement";
import { SidebarCategory } from "./DOMObjects/SidebarCategory";
import { ProjectContainer } from "./DOMObjects/ProjectContainer";
import { AddButton } from "./DOMObjects/AddButton";
import { Project } from "../Objects/Project";

export const Sidebar = () => {
	const sidebar = UIelement('nav', 'sidebar');
	const all = SidebarCategory('All');
	const today = SidebarCategory('Today');
	const week = SidebarCategory('Week');
	const projectContainer = ProjectContainer();
	const addProjectButton = AddButton('project');

	sidebar.append(all, today, week, projectContainer, addProjectButton);

	addProjectButton.addEventListener('click', () => {
		const newProj = Project(`Project ${projectContainer.projectList.length + 1}`);
		projectContainer.addProject(newProj);
	});


	return Object.assign(sidebar, { projectContainer, addProjectButton });
};