import "./styles/reset.css";
import "./styles/home-page.css";
import { displayController } from "./components/display";
import { logicController } from "./components/logic";
import { storageAvailable } from "./persistence/check-local-storage";

displayController.displayHeader();


let folders;
folders = logicController.getFolders();

// if (storageAvailable('localStorage')) {
//     if (localStorage.getItem('folders')) {
//         folders = localStorage.getItem('folders');
//     }
// } else {
//     localStorage.setItem('folders', []); 
//     folders = []; 
//     // folders = logicController.getFolders();
// }

displayController.displayMainPage(folders);