import "./styles/reset.css";
import "./styles/home-page.css";
import { displayController } from "./components/display";
import { detectMenuClick, detectAddFolder } from "./components/detect";

displayController.displayHeader();
detectMenuClick();
displayController.displayMainPage();
detectAddFolder();

// TODO: consider create an IIFE after all the displayController 
// functions are done running for all the click detections