import './style.css';
import { UI } from './DOM/UI';
import { ItemCard } from './DOM/DOMObjects/ItemCard';
import { Item } from './Objects/Item';
import { Project } from './Objects/Project';

export const ui = UI();


// Testing
// const testProj = Project();
// const item1 = Item('itemOne', 'description', '1993-02-04','Medium', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada dapibus eleifend. Cras rutrum elit nec velit rhoncus efficitur at nec justo. Morbi pellentesque aliquet tellus, vitae tempus purus. Vivamus venenatis orci sit amet libero molestie, nec laoreet turpis laoreet. Pellentesque vulputate neque turpis. Cras vitae justo dui. Pellentesque quis semper magna. Donec ac lectus velit. Cras lectus orci, dignissim in felis at, cursus facilisis erat. Nullam purus augue, faucibus facilisis nisi eu, tempor condimentum nunc. Praesent ornare quam quis dignissim faucibus. Curabitur vitae arcu volutpat, mollis ex commodo, pharetra urna. Sed volutpat ante quis lectus efficitur, in porta tellus sodales. Curabitur eleifend nulla a quam lacinia ullamcorper. Morbi suscipit ultrices tellus, vitae rutrum metus tempus in. Morbi ac tortor non tortor dictum euismod.');

// testProj.addItem(item1 )

// ui.sidebar.projectContainer.addProject(testProj);

// content.reload()

// content.currentProject.UItext(testProj.title);

// testProj.itemList.forEach(item => content.append(ItemCard(item)));