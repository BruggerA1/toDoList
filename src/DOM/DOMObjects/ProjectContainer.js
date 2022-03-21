import { ProjectDB } from '../../Objects/projectDB';
import { ProjectCard } from './projectCard';
import { UIelement } from './UIelement';

export const ProjectContainer = () => {
	const details = UIelement('details', 'projects');
	const summary = UIelement('summary', 'projectList');

	const projectList = ProjectDB();

	const addProject = (project) => {
		projectList.push(project);
		details.append(ProjectCard(project));
	};

	const update = () => {
		details.UItext('');
		projectList.forEach(project => details.append(ProjectCard(project)));

	};

	details.open = true;
	
	summary.UItext('Projects');

	details.append(summary);

	return Object.assign(details, { projectList, addProject, update });
};