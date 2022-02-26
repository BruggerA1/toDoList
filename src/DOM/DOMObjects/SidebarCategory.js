import { UIelement } from "./UIelement";

export const SidebarCategory = (categoryText) => {
	const sidebarCategory = UIelement('div');
	
	sidebarCategory.UItext(categoryText);
	sidebarCategory.addClass('sidebarCategory');
	
	return sidebarCategory;
};