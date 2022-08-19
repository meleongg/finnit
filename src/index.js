import "./styles/reset.css";
import "./styles/home-page.css";
import { displayController } from "./components/display";
import { logicController } from "./components/logic";

displayController.displayHeader();
logicController.initializeFolders();