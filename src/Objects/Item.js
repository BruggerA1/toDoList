export const Item = (title='title', description='description', dueDate='', priority='medium', notes='notes') => {
	const item = { title, description, dueDate, priority, notes }

	return Object.assign(item, {})
};
