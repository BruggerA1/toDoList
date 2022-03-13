export const ProjectDB = () => {
	const projectDB = [];
	const currentDate = new Date();

	const getItems = () => {
		const allItems = [];
		projectDB.forEach(project => {
			project.itemList.forEach(item => {
				allItems.push(item);
			});
		});

		return allItems;
	};

	const getCurrentDate = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();

		return `${year}-${month}-${day}`;
	}

	return Object.assign(projectDB, {getItems, getCurrentDate});
};