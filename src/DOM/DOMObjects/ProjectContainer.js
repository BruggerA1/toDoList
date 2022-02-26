import { ProjectCard } from "./projectCard";
import { UIelement } from "./UIelement";

export const ProjectContainer = () => {
	const details = UIelement('details', 'projects');
	const summary = UIelement('summary', 'projectList');
 	const projectList = []

	details.open = true;
	summary.UItext('Projects'); 

	details.append(summary);

	const addProject = (...projects) => {
		projects.forEach(project => {
			const item = ProjectCard(project);
			projectList.push(project)
			details.append(item);
		})
	}

	const update = () => {
		details.UItext('');
		projectList.forEach(project => {
			const item = ProjectCard(project);
			details.append(item);
		})
	}

	return Object.assign(details, { addProject, update })
};