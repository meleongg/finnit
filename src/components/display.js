import { renderMainPage } from "./main-page";
import { renderHeader } from "./header";
import { resetMainPageDetects } from "./detect";

const displayController = (() => {
    const _content = document.getElementById("content");

    const _clear = () => {
        _content.innerHTML = "";
    }

    const _resetElmStates = () => {
        const form = document.getElementById("folder-form");
    }

    const displayHeader = () => {
        renderHeader(_content);
    }

    const displayMainPage = (folders) => {
        _clear();
        displayHeader();
        renderMainPage(_content, folders);
        // _resetElmStates();
        resetMainPageDetects();
    }

    // should consume a folder object to render the tasks
    const displayFolderPage = (folder) => {
        _clear();
        displayHeader();
        console.log(folder.name);
    }
    
    // TODO: create another js file to detect all events 
    // TODO: create another js file to handle displayControl? 
    //    - calls renderMainPage, renderTask, etc.
    
    return { displayHeader, displayMainPage, displayFolderPage };
})();

export { displayController }