import { throwError } from "./error";
import { resetForm } from "./forms";
import { displayController } from "./display";
import { validateFns } from "./validate";
import { Folder } from "./folder-class";
import { storageAvailable } from "../persistence/check-local-storage";
import { Task } from "./task-class";
import { checkWithinWeek, getMinDueDate, stringToDate } from "./date";

const logicController = (() => {
    const defaultFolder = new Folder("Inbox", []);

    let _tempFetch = [];

    let _folders = [];

    const initializeFolders = () => {
        if (storageAvailable('localStorage')) {
            if (localStorage.getItem('folders')) {
                _tempFetch = JSON.parse(localStorage.getItem('folders'));
                parseFirstFetch(_tempFetch);
            } else {
                _folders.push(defaultFolder);
                updateLocalStorage();
            }
        } else {
            _folders.push(defaultFolder);
        }

        refreshMainFoldersPage();
    }
    
    const addFolder = (name) => {
        if (validateFns.checkEmptyArr(_folders)) {
            let newFolder = new Folder(name, []);
            _folders.push(newFolder);
            updateLocalStorage();
            refreshMainFoldersPage();
        } else {
            if (validateFns.checkDuplicate(name, _folders)) {
                resetForm("new-folder-form");
                throwError("Folder already exists!");
            } else if (validateFns.checkEmpty(name)) {
                resetForm("new-folder-form");
                throwError("Folder name cannot be empty!");
            } else {
                let newFolder = new Folder(name, []);
                _folders.push(newFolder);
                updateLocalStorage();
                refreshMainFoldersPage();
            }
        }
    }

    const editFolder = (index, newName, oldName) => {
        if (validateFns.checkNoChange(newName, oldName)) {
            _folders[index].name = newName;
            updateLocalStorage();
            refreshMainFoldersPage();
        } else {
            if (validateFns.checkDuplicate(newName, _folders)) {
                throwError("Folder already exists!");
            } else if (validateFns.checkEmpty(newName)) {
                throwError("Folder name cannot be empty!");
            } else {
                _folders[index].name = newName;
                updateLocalStorage();
                refreshMainFoldersPage();
            }
        }
    }

    const deleteFolder = (index) => {
        if (validateFns.checkDefault(index)) {
            throwError(`Cannot delete ${_folders[index].name}!`);
        } else {
            _folders.splice(index, 1);
            updateLocalStorage();
            refreshMainFoldersPage();
        }
    }

    const parseFirstFetch = (parsedObject) => {
        let tempFolders = [];

        for (let i = 0; i < parsedObject.length; i++) {
            let folderName = parsedObject[i].name; 
            let tasks = parsedObject[i].tasks; 
            let tempTasks = [];

            if (typeof tasks !== 'undefined' && tasks.length !== 0) {
                for (let j = 0; j < tasks.length; j++) {
                    let taskName = tasks[j].name;
                    let taskDate = tasks[j].date;
                    let taskDesc = tasks[j].desc;
                    let taskPriority = tasks[j].priority;
                    let taskNotes = tasks[j].notes;
                    let taskStatus = tasks[j].status;
                    let taskFolder = tasks[j].folder;

                    let tempTask = new Task(taskName, taskDate, taskDesc, taskPriority, taskNotes, taskStatus, taskFolder);

                    tempTasks.push(tempTask);
                }
            } 

            let tempFolder = new Folder(folderName, tempTasks);
            tempFolders.push(tempFolder);
        }

        _folders = tempFolders; 
    }

    const updateLocalStorage = () => {
        localStorage.setItem('folders', JSON.stringify(_folders));
    }

    const refreshFolderPage = (folder) => {
        displayController.displayFolderPage(folder);
    }

    const refreshMainFoldersPage = () => {
        displayController.displayMainPage(_folders);
    }

    const getFolders = () => {
        return _folders; 
    }

    const getFolder = (index) => {
        return _folders[index];
    }

    const getFolderByName = (name) => {
        for (let i = 0; i < _folders.length; i++) {
            if (_folders[i].name === name) {
                return _folders[i];
            }
        }
    }

    const getFolderByTaskName = (taskName) => {
        for (let i = 0; i < _folders.length; i++) {
            for (let j = 0; j < _folders[i].tasks.length; j++) {
                if (_folders[i].tasks[j].name === taskName) {
                    return _folders[i];
                }
            }
        }
    }

    const getTaskByTaskName = (taskName) => {
        for (let i = 0; i < _folders.length; i++) {
            for (let j = 0; j < _folders[i].tasks.length; j++) {
                if (_folders[i].tasks[j].name === taskName) {
                    return _folders[i].tasks[j];
                }
            }
        }
    }

    const getAllTasks = () => {
        let tasks = [];

        for (let i = 0; i < _folders.length; i++) {
            for (let j = 0; j < _folders[i].tasks.length; j++) {
                tasks.push(_folders[i].tasks[j]);
            }
        }

        return tasks; 
    }

    const getTodaysTasks = () => {
        let tasks = [];

        for (let i = 0; i < _folders.length; i++) {
            for (let j = 0; j < _folders[i].tasks.length; j++) {
                if (_folders[i].tasks[j].date === getMinDueDate()) {
                    tasks.push(_folders[i].tasks[j]);
                }
            }
        }

        return tasks; 
    }

    const getWeeksTasks = () => {
        let tasks = [];

        for (let i = 0; i < _folders.length; i++) {
            for (let j = 0; j < _folders[i].tasks.length; j++) {
                if (checkWithinWeek(stringToDate(_folders[i].tasks[j].date))) {
                    tasks.push(_folders[i].tasks[j]);
                }
            }
        }

        return tasks; 
    }

    return { initializeFolders, addFolder, deleteFolder, editFolder, getFolders, 
             getFolder, refreshFolderPage, getFolderByName, getFolderByTaskName, updateLocalStorage, 
             getTaskByTaskName, refreshMainFoldersPage, getAllTasks, getTodaysTasks, getWeeksTasks }
})();

export { logicController }