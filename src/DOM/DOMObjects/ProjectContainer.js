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
		update();
	};

	const update = () => {
		detailsContainer.UItext('');
		projectList.forEach(project => detailsContainer.append(ProjectCard(project)));
		details.append(summary,detailsContainer);

	};

	details.open = true;
	
	summary.UItext('Projects');

	details.append(summary, detailsContainer);
	return Object.assign(details, { projectList, addProject, update });
};