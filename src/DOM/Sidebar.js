import { UIelement } from "./DOMObjects/UIelement";
import { SidebarCategory } from "./DOMObjects/SidebarCategory";
import { ProjectContainer } from "./DOMObjects/ProjectContainer";
import { addButton } from "./DOMObjects/addButton";

export const Sidebar = () => {
	const sidebar = UIelement('nav', 'sidebar');
	const all = SidebarCategory('All');
	const today = SidebarCategory('Today');
	const week = SidebarCategory('Week');
	const projectContainer = ProjectContainer();
	const addProjectButton = addButton('project')

	sidebar.append(all, today, week, projectContainer, addProjectButton);
	
	return Object.assign(sidebar, { projectContainer, addProjectButton });
}