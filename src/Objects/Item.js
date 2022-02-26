export const Item = (title, description, dueDate, priority, notes) => {
	const item = { title, description, dueDate, priority, notes }

	return Object.assign(item, {})
};
