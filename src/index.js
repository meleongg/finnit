import "./styles/reset.css";
import "./styles/home-page.css";
import { displayController } from "./components/display";
import { logicController } from "./components/logic";
import { storageAvailable } from "./persistence/check-local-storage";
import { Folder } from "./components/folder-class";

displayController.displayHeader();


// folders = logicController.getFolders();
// const defaultFolder = new Folder("Inbox", []);

// let folders;

// if (storageAvailable('localStorage')) {
//     if (localStorage.getItem('folders')) {
//         folders = localStorage.getItem('folders');
//     } else {
//         localStorage.setItem('folders', folders); 
//     }
// } else {
//     alert("Local Storage Unavailable");
//     // folders = logicController.getFolders();
// }

logicController.initializeFolders();