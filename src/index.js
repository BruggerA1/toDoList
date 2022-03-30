import './style.css';
import { UI } from './DOM/UI';
import { ItemCard } from './DOM/DOMObjects/ItemCard';
import { Item } from './Objects/Item';
import { Project } from './Objects/Project';

export const ui = UI();


// Testing
const testProj = Project();
const item1 = Item('itemOne', 'description', '1993-02-04','Medium', 'notes');
const item2 = Item('itemTwo', 'description', '2022-03-16','Medium', 'notes');
const item3 = Item('itemThree', 'description', '2022-03-17','Medium', 'notes');

testProj.addItem(item1, item2, item3 )

ui.sidebar.projectContainer.addProject(testProj);

content.reload()

content.currentProject.UItext(testProj.title);

testProj.itemList.forEach(item => content.append(ItemCard(item)));