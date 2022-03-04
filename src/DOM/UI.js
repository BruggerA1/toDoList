import { UIelement } from "./DOMObjects/UIelement";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

export const UI = () => {
	const UI = UIelement('body');
	const header = Header();
	const sidebar = Sidebar();
	const content = Content();

	UI.append(header, sidebar, content);

	return Object.assign(UI, { sidebar, content });
};