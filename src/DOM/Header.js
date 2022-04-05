import { ui } from "..";
import { UIelement } from "./DOMObjects/UIelement";

export const Header = () => {
	const header = UIelement('header', 'banner');

	const menuButton = UIelement('button', 'menuButton');
	let showMenu = true;

	const toggleSidebar = () => {
		if (showMenu == true) {
			ui.sidebar.remove();
			ui.style.gridTemplateAreas = `'banner banner' 'content content'`;
		}
		else {
			ui.append(ui.sidebar);
			ui.style.gridTemplateAreas = `'banner banner' 'sidebar content'`;
		}
		showMenu = !showMenu;
	};



	header.append(menuButton);

	menuButton.addEventListener('click', () => toggleSidebar())
	
	return header;
};