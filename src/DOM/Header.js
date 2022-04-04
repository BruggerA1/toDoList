import { ui } from "..";
import { UIelement } from "./DOMObjects/UIelement";

export const Header = () => {
	const header = UIelement('header', 'banner');

	const hamburger = UIelement('button', 'hamburger');
	let burgertruth = true;

	header.append(hamburger);

	hamburger.addEventListener('click', () => {
		if (burgertruth == true) {
			console.log(ui)
			ui.sidebar.remove();
			burgertruth = false;
			ui.style.gridTemplateAreas = "'banner banner' 'content content'"
		}
		else {
			ui.append(ui.sidebar);
			burgertruth = true;
			ui.style.gridTemplateAreas = "'banner banner' 'sidebar content'"

		}
	})
	return header;
};