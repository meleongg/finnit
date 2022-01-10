import "./styles/reset.css";
import "./styles/home-page.css";
import { displayController } from "./components/display";
import { logicController } from "./components/logic";

displayController.displayHeader();
let folders = logicController.getFolders();
displayController.displayMainPage(folders);

// TODO: consider create an IIFE after all the displayController 
// functions are done running for all the click detections