import { renderMainPage } from "./main-page";
import { renderHeader } from "./header";

const content = document.getElementById("content");

const displayController = (() => {
    const _clearForm = () => {
        content.innerText = "";
    }

    const displayHeader = () => {
        renderHeader(content);
    }

    const displayMainPage = () => {
        renderMainPage(content);
    }
    
    // TODO: create another js file to detect all events 
    // TODO: create another js file to handle displayControl? 
    //    - calls renderMainPage, renderTask, etc.
    
    return { displayHeader, displayMainPage };
})();

export { displayController }