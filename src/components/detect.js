import { toggleElm, toggleOpaque } from "./toggle";
import {
    getFolderFormInfo, resetForm, removeFolderBtns,
    renderEditFolderForm, getEditFolderInfo, getTaskFormInfo,
    renderTaskEditForm, getEditTaskInfo
} from "./forms";
import { logicController } from "./logic";
import { displayController } from "./display";
import { getHeading } from "./heading";
import { getOuterContainer } from "./render-task";

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
        btn.addEventListener("click", () => {
            let index = folder.dataset.index;
            let newName = getEditFolderInfo(folder);
            let oldName = folder.dataset.oldName;
            logicController.editFolder(index, newName, oldName);
        });
    }

    const detectDeleteFolder = (btn) => {
        btn.addEventListener("click", (e) => {
            let btnA = e.target.parentElement;
            let btnDiv = btnA.parentElement;
            let folder = btnDiv.parentElement;
            let index = folder.dataset.index;
            logicController.deleteFolder(index);
        });
    }

    const detectFolderClick = (headingElm) => {
        headingElm.addEventListener("click", (e) => {
            let folder = e.target.parentElement;
            let index = folder.dataset.index;
            const folderInfo = logicController.getFolder(index);
            displayController.displayFolderPage(folderInfo);
        });
    } 

    const detectBackHomeBtn = () => {
        const btn = document.getElementById("back-btn");
        btn.addEventListener("click", () => {
            const folders = logicController.getFolders();
            displayController.displayMainPage(folders); 
        });
    }
    
    const detectBackFolderBtn = () => {
        const btn = document.getElementById("back-btn");
        btn.addEventListener("click", () => {
            const taskName = getHeading(); 
            const folder = logicController.getFolderByTaskName(taskName);
            displayController.displayFolderPage(folder);
        });
    }
    
    const detectAddTask = () => {
        const btn = document.getElementById("add-task-btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleElm("add-task-btn");
            toggleElm("task-form"); 
            detectTaskCancelBtn();
            detectTaskSubmitBtn();
        });
    }

    let hasListener = false; 

    const detectTaskCancelBtn = () => {
        const btn = document.getElementById("cancel-task-btn");
        if (!hasListener) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                resetForm("new-task-form");
                toggleElm("task-form");
                toggleElm("add-task-btn");
            });
            hasListener = true; 
        }
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
            let folder = logicController.getFolderByName(heading);
            info.push(folder.name);
            let task = folder.createTask(info);
            folder.addTask(task); 
            logicController.updateLocalStorage();
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
            logicController.updateLocalStorage();
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
            logicController.updateLocalStorage();
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

    const detectEditTask = (btn) => {
        btn.addEventListener("click", () => {
            const taskContainer = getOuterContainer();
            let nameElm = document.getElementsByClassName("task-name")[0];
            let taskName = nameElm.innerText;

            const task = logicController.getTaskByTaskName(taskName);
            renderTaskEditForm(taskContainer, task);
        });
    }

    const detectExitTask = (btn) => {
        btn.addEventListener("click", () => {
            const taskName = getHeading();
            const folder = logicController.getFolderByTaskName(taskName);
            displayController.displayFolderPage(folder);
        });
    }

    const detectCancelEditTask = (btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let outerContainer = document.getElementsByClassName("task-outer-container")[0];
            let innerContainer = document.getElementsByClassName("task-inner-container")[0];

            let taskName = getHeading();
            let folderObj = logicController.getFolderByTaskName(taskName);

            outerContainer.display = "none";
            innerContainer.reset(); 

            logicController.refreshFolderPage(folderObj);
        });
    }

    const detectSaveEditTask = (btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let taskName = getHeading();
            let folderObj = logicController.getFolderByTaskName(taskName);
            let taskObj = logicController.getTaskByTaskName(taskName);

            let newVals = getEditTaskInfo();
            folderObj.editTask(taskObj, newVals);

            logicController.updateLocalStorage();

            let innerContainer = document.getElementsByClassName("task-inner-container")[0];
            innerContainer.reset(); 

            logicController.refreshFolderPage(folderObj);
        });
    }


    const detectHomeButtonClick = (btn) => {
        btn.addEventListener("click", () => {
            logicController.refreshMainFoldersPage();
        });
    }

    const detectAllTasksClick = (btn) => {
        btn.addEventListener("click", () => {
            let tasks = logicController.getAllTasks();
            displayController.displayAllTasks("All Tasks", tasks);
        });
    }

    const detectTodaysTasksClick = (btn) => {
        btn.addEventListener("click", () => {
            let tasks = logicController.getTodaysTasks();
            displayController.displayAllTasks("Today's Tasks", tasks);
        });
    }

    const detectWeeksTasksClick = (btn) => {
        btn.addEventListener("click", () => {
            let tasks = logicController.getWeeksTasks();
            displayController.displayAllTasks("This Week's Tasks", tasks);
        });
    }

    return {
        detectMenuClick, detectAddFolder, detectFolderCancelBtn,
        detectFolderSubmitBtn, detectEditFolder, detectDeleteFolder,
        detectSaveEditFolder, detectFolderClick, detectBackHomeBtn, 
        detectBackFolderBtn, detectAddTask, detectTaskCancelBtn, 
        detectTaskSubmitBtn, detectDeleteTask, detectTaskCheckbox, 
        detectTaskClick, detectExitTask, detectEditTask,
        detectCancelEditTask, detectSaveEditTask, detectHomeButtonClick,
        detectAllTasksClick, detectTodaysTasksClick, detectWeeksTasksClick
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
    detectElms.detectBackHomeBtn();
    detectElms.detectAddTask();
}

const resetTaskPageDetects = () => {
    detectElms.detectMenuClick();
    detectElms.detectBackFolderBtn();
}

const resetAllTasksPageDetects = () => {
    detectElms.detectMenuClick();
}

export { detectElms, resetMainPageDetects, resetFolderPageDetects, resetTaskPageDetects, resetAllTasksPageDetects}