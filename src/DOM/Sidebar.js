import { UIelement } from "./DOMObjects/UIelement";
import { SidebarCategory } from "./DOMObjects/SidebarCategory";
import { ProjectContainer } from "./DOMObjects/ProjectContainer";
import { AddButton } from "./DOMObjects/AddButton";
import { Project } from "../Objects/Project";
import { ui } from "..";

export const Sidebar = () => {
	const sidebar = UIelement('nav', 'sidebar');
	const all = SidebarCategory('All');
	const today = SidebarCategory('Today');
	const week = SidebarCategory('Week');
	const projectContainer = ProjectContainer();
	const addProjectButton = AddButton('Project');
	let projectCount = 1;

	const addProject = () => {

		projectContainer.addProject(Project(`Untitled Project ${projectCount}`));
	
		projectCount++;

		ui.sidebar.updateCategories();
	};

	const updateCategories = () => {
		sidebar.all.updateLabel();
		sidebar.today.updateLabel();
		sidebar.week.updateLabel();
	};

	addProjectButton.addEventListener('click', () => {
		addProject();
	});

	sidebar.append(all, today, week, projectContainer, addProjectButton);

	return Object.assign(sidebar, { projectContainer, all, today, week, addProjectButton, updateCategories });
};