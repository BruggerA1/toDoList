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
	let projectCount = 1;

	const addProject = () => {
		const newProj = Project(`Untitled Project ${projectCount}`);

		projectContainer.addProject(newProj);
	
		projectCount++
	};

	addProjectButton.addEventListener('click', () => {
		addProject();
	});

	sidebar.append(all, today, week, projectContainer, addProjectButton);

	return Object.assign(sidebar, { projectContainer, addProjectButton });
};