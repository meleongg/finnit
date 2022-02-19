import { toggleElm, toggleOpaque } from "./toggle";
import {
    getFolderFormInfo, resetForm, removeFolderBtns,
    renderEditFolderForm, getEditFolderInfo, getTaskFormInfo
} from "./forms";
import { logicController } from "./logic";
import { displayController } from "./display";
import { getHeading } from "./heading";

const detectElms = (() => {
    const _detectOpaqueClick = () => {
        const opaque = document.getElementById("opaque");
        opaque.addEventListener("click", () => {
            toggleElm("menu");
            toggleOpaque();
        });
    }

    const detectMenuClick = () => {
        const menuToggle = document.getElementById("menu-toggle-btn");
        menuToggle.addEventListener("click", () => {
            toggleElm("menu");
            toggleOpaque();
        });
        _detectOpaqueClick();
    }

    const detectAddFolder = () => {
        const btn = document.getElementById("add-folders-btn");
        btn.addEventListener("click", () => {
            toggleElm("add-folders-btn");
            toggleElm("folder-form");
        });
    }

    const detectFolderCancelBtn = () => {
        const btn = document.getElementById("cancel-folder-btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            resetForm("new-folder-form");
            toggleElm("folder-form");
            toggleElm("add-folders-btn");
        });
    }

    const detectFolderSubmitBtn = () => {
        const btn = document.getElementById("create-folder-btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleElm("folder-form");
            toggleElm("add-folders-btn");
            let info = getFolderFormInfo();
            resetForm("new-folder-form");
            logicController.addFolder(info);
        });
    }

    const detectEditFolder = (btn) => {
        btn.addEventListener("click", (e) => {
            let btnA = e.target.parentElement;
            let btnDiv = btnA.parentElement;
            let folder = btnDiv.parentElement;
            let folderName = folder.children[0];
            let oldName = folderName.innerText;
            folder.dataset.oldName = oldName;
            removeFolderBtns(folder);
            renderEditFolderForm(folder);
        });
    }

    const detectSaveEditFolder = (btn) => {
        btn.addEventListener("click", (e) => {
            let folder = e.target.parentElement;
            let index = folder.dataset.index;
            let newName = getEditFolderInfo(folder);
            let oldName = folder.dataset.oldName;
            logicController.editFolder(index, folder, newName, oldName);
        });
    }

    const detectDeleteFolder = (btn) => {
        btn.addEventListener("click", (e) => {
            let btnA = e.target.parentElement;
            let btnDiv = btnA.parentElement;
            let folder = btnDiv.parentElement;
            let index = folder.dataset.index;
            logicController.deleteFolder(index, folder);
        });
    }

    const detectFolderClick = (headingElm) => {
        headingElm.addEventListener("click", (e) => {
            let folder = e.target.parentElement;
            // let folderName = folder.innerText;
            let index = folder.dataset.index;
            const folderInfo = logicController.getFolder(index);
            displayController.displayFolderPage(folderInfo);
        });
    } 

    const detectBackBtn = () => {
        const btn = document.getElementById("back-btn");
        btn.addEventListener("click", () => {
            const folders = logicController.getFolders();
            displayController.displayMainPage(folders); 
        });
    }

    const detectAddTask = () => {
        const btn = document.getElementById("add-task-btn");
        btn.addEventListener("click", () => {
            toggleElm("add-task-btn");
            toggleElm("task-form"); 
            detectTaskCancelBtn();
            detectTaskSubmitBtn();
        });
    }

    const detectTaskCancelBtn = () => {
        const btn = document.getElementById("cancel-task-btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            resetForm("new-task-form");
            toggleElm("task-form");
            toggleElm("add-task-btn");
        });
    }

    const detectTaskSubmitBtn = () => {
        const btn = document.getElementById("create-task-btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleElm("task-form");
            toggleElm("add-task-btn");
            let info = getTaskFormInfo(); 
            resetForm("new-task-form");
            let heading = getHeading();
            // folder is an object
            let folder = logicController.getFolderByName(heading);
            let task = folder.createTask(info);
            folder.addTask(task);
            logicController.refreshFolderPage(folder);
        });
    }

    const detectDeleteTask = (btn) => {
        btn.addEventListener("click", (e) => {
            let btnA = e.target.parentElement;
            let task = btnA.parentElement;
            let index = task.dataset.index;
            let heading = getHeading();
            let folder = logicController.getFolderByName(heading);
            folder.deleteTask(index);
            logicController.refreshFolderPage(folder);
        });
    }

    const detectTaskCheckbox = (input) => {
        input.addEventListener("click", (e) => {
            let task = e.target.parentElement;
            let index = task.dataset.index; 
            let heading = getHeading();
            let folder = logicController.getFolderByName(heading);
            folder.updateTaskStatus(index);
            logicController.refreshFolderPage(folder);
        });
    }

    const detectTaskClick = (headingElm) => {
        headingElm.addEventListener("click", (e) => {
            let task = e.target.parentElement;
            let index = task.dataset.index;
            let heading = getHeading();
            let folder = logicController.getFolderByName(heading);
            const taskInfo = folder.getTaskByIndex(index);
            displayController.displayTaskPage(taskInfo);
        });
    } 


    return {
        detectMenuClick, detectAddFolder, detectFolderCancelBtn,
        detectFolderSubmitBtn, detectEditFolder, detectDeleteFolder,
        detectSaveEditFolder, detectFolderClick, detectBackBtn,
        detectAddTask, detectTaskCancelBtn, detectTaskSubmitBtn,
        detectDeleteTask, detectTaskCheckbox, detectTaskClick
    }
})();

const resetMainPageDetects = () => {
    detectElms.detectMenuClick();
    detectElms.detectAddFolder();
    detectElms.detectFolderCancelBtn();
    detectElms.detectFolderSubmitBtn();
}

const resetFolderPageDetects = () => {
    detectElms.detectMenuClick();
    detectElms.detectBackBtn();
    detectElms.detectAddTask();
}

const resetTaskPageDetects = () => {
    detectElms.detectMenuClick();
    detectElms.detectBackBtn();
}

export { detectElms, resetMainPageDetects, resetFolderPageDetects, resetTaskPageDetects}