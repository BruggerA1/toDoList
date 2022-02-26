import { UI } from './DOM/UI';
import './style.css';

import { Item } from './Objects/Item';
import { Project } from './Objects/Project';

import { itemCard } from './DOM/DOMObjects/ItemCard';

export const ui = UI();

const projectContainer = ui.sidebar.projectContainer;
const content = ui.content;

const item1 = Item('Walk Dog', 'Take Winston For a Walk', '2022-03-25', 'HIGH', 'Winston Needs to take a long walk to get ready for the Boston Marathon this Spring.');

const item2 = Item('Go To Doctor', 'Go to Doctor for Vyvanse', '1993-02-04', 'MEDIUM', 'Telehealth Link : ########');

const item3 = Item('item4', 'description4', '1960-01-14', 'priority', 'notes');
const item4 = Item('item5', 'description5', '1993-09-17', 'priority', 'notes');
const proj1 = Project('Project 1');
const proj2 = Project('Project 2');

projectContainer.addProject(proj1, proj2);

proj1.addItem(item1, item2);
proj2.addItem(item2, item3, item4);
proj2.deleteItem(item3);
projectContainer.update();

