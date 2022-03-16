import { isThisWeek, isToday, parseISO } from "date-fns";

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


	const getCurrentDate = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();

		return `${year}-${month}-${day}`;
	}

	return Object.assign(projectDB, {getItems, getCurrentDate, getTodayItems, getWeekItems});
};