import { isThisWeek, isToday, parseISO } from "date-fns";

export const ProjectDB = () => {
	const projectDB = [];

	const getItems = () => {
		const allItems = [];
		projectDB.forEach(project => {
			project.itemList.forEach(item => {
				allItems.push(item);
			});
		});

		return allItems;
	};

	const getWeekItems = () => {
		const weekItems = [];
		getItems().forEach(item => {
			if (isThisWeek(parseISO(item.dueDate)) == true) {
				weekItems.push(item);
			};
		});

		return weekItems;
	}

	const getTodayItems = () => {
		const todayItems = [];
		getItems().forEach(item => {
			if (isToday(parseISO(item.dueDate)) == true) {
				todayItems.push(item);
			};
		});

		return todayItems;
	}

	return Object.assign(projectDB, {getItems, getTodayItems, getWeekItems});
};