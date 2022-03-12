export const Item = (title = 'title', description = 'description', dueDate = '', priority = 'Medium', notes = 'notes') => {
	const item = new Object();

	const dateID = new Date();
	const id = `${dateID.getMinutes()}${dateID.getSeconds()}${dateID.getMilliseconds()}`

	return Object.assign(item, { title, description, dueDate, priority, notes, id });
};