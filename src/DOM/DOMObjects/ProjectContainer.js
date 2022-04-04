import { ProjectDB } from '../../Objects/projectDB';
import { ProjectCard } from './projectCard';
import { UIelement } from './UIelement';

export const ProjectContainer = () => {
	const details = UIelement('details', 'projects');
	const summary = UIelement('summary', 'projectList');
	const detailsContainer = UIelement('div', 'projectsContainer');
	const projectList = ProjectDB();

	const addProject = (project) => {
		projectList.push(project);
		detailsContainer.append(ProjectCard(project));
	};

	const update = () => {
		details.UItext('');
		details.append(summary);
		projectList.forEach(project => details.append(ProjectCard(project)));

	};

	details.open = true;
	
	summary.UItext('Projects');

	details.append(summary, detailsContainer);

	return Object.assign(details, { projectList, addProject, update });
};