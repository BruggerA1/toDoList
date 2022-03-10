export const Item = (title = 'title', description = 'description', dueDate = '', priority = 'Medium', notes = 'notes') => {
	const item = new Object();

	return Object.assign(item, { title, description, dueDate, priority, notes });
};