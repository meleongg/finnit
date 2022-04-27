import { renderMainPage } from "./main-page";
import { renderHeader } from "./header";
import { resetMainPageDetects, resetFolderPageDetects, resetTaskPageDetects, resetAllTasksPageDetects } from "./detect";
import { renderFolderPage } from "./folder-page";
import { renderTaskPage } from "./task-page";
import { renderAllTasks } from "./render-tasks";
import { renderMenu } from "./menu";
import { renderHeading } from "./heading";

const displayController = (() => {
    const _content = document.getElementById("content");

    const _clear = () => {
        _content.innerHTML = "";
    }

    const displayHeader = () => {
        renderHeader(_content);
    }

    const displayMainPage = (folders) => {
        _clear();
        displayHeader();
        renderMainPage(_content, folders);
        resetMainPageDetects();
    }

    // should consume a folder object to render the tasks
    const displayFolderPage = (folder) => {
        _clear();
        displayHeader();
        renderFolderPage(_content, folder);
        resetFolderPageDetects();
    }

    const displayTaskPage = (task) => {
        _clear();
        displayHeader();
        renderTaskPage(_content, task);
        resetTaskPageDetects();
    }

    const displayAllTasks = (name, tasks) => {
        _clear();
        displayHeader();
        let menu = renderMenu();
        _content.appendChild(menu);
        
        let heading = renderHeading(name, false);
        _content.appendChild(heading);

        let opaque = document.createElement("div");
        opaque.id = "opaque";
        _content.appendChild(opaque);

        renderAllTasks(_content, tasks);
        resetAllTasksPageDetects();
    }
    
    return { displayHeader, displayMainPage, displayFolderPage, displayTaskPage, displayAllTasks };
})();

export { displayController }