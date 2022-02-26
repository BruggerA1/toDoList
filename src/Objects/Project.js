export const Project = (title) => {
	const project = {title}
	const itemList = [];

	const addItem = (...items) => {
		items.forEach(item => {
			itemList.push(item);
		});
	}

	const deleteItem = (item) => {
		const index = itemList.indexOf(item);
		if (index > -1) itemList.splice(index, 1);
	}

	return Object.assign(project, {itemList, addItem, deleteItem})
};