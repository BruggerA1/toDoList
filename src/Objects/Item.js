export const Item = (title = 'title', description = 'description', dueDate = '2000-01-02', priority = 'Medium', notes = 'notes') => {
	const item = new Object();

	return Object.assign(item, { title, description, dueDate, priority, notes });
};