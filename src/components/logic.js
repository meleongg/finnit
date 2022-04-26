import { throwError } from "./error";
import { resetForm } from "./forms";
import { displayController } from "./display";
import { validateFns } from "./validate";
import { Folder } from "./folder-class";
import { removeFolder } from "./render-folders";
import { storageAvailable } from "../persistence/check-local-storage";
import { Task } from "./task-class";

const logicController = (() => {
    const defaultFolder = new Folder("Inbox", []);

    let _tempFetch = [];

    let _folders = [];

    const initializeFolders = () => {
        if (storageAvailable('localStorage')) {
            if (localStorage.length > 1) {
                _tempFetch = JSON.parse(localStorage.getItem('folders'));
                parseFirstFetch(_tempFetch);
            } else {
                _folders.push(defaultFolder);
                updateLocalStorage();
            }
        } else {
            _folders.push(defaultFolder);
        }

        displayController.displayMainPage(_folders);
    }
    
    const addFolder = (name) => {
        if (validateFns.checkEmptyArr(_folders)) {
            let newFolder = new Folder(name, []);
            _folders.push(newFolder);
            updateLocalStorage();
            displayController.displayMainPage(_folders);
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
                displayController.displayMainPage(_folders);
            }
        }
    }

    const editFolder = (index, folder, newName, oldName) => {
        if (validateFns.checkNoChange(newName, oldName)) {
            _folders[index].name = newName;
            updateLocalStorage();
            displayController.displayMainPage(_folders);
        } else {
            if (validateFns.checkDuplicate(newName, _folders)) {
                throwError("Folder already exists!");
            } else if (validateFns.checkEmpty(newName)) {
                throwError("Folder name cannot be empty!");
            } else {
                _folders[index].name = newName;
                updateLocalStorage();
                displayController.displayMainPage(_folders);
            }
        }
    }

    const deleteFolder = (index, folder) => {
        if (validateFns.checkDefault(index)) {
            throwError(`Cannot delete ${_folders[index].name}!`);
        } else {
            _folders.splice(index, 1);
            updateLocalStorage();
            displayController.displayMainPage(_folders);
        }
    }

    const parseFirstFetch = (parsedObject) => {
        _folders = parsedObject.map(({ name, tasks }) => { 
            let tempTasks = [];
            tasks.map(({ name, date, desc, priority, notes, status, folder}) => {
                let tempTask = new Task(name, date, desc, priority, notes, status, folder);
                tempTasks.push(tempTask);
            });
            new Folder(name, tempTasks);
        });
    }

    const updateLocalStorage = () => {
        localStorage.setItem('folders', JSON.stringify(_folders));
        // _folders = JSON.parse(localStorage.getItem('folders'));
        // console.log(_folders);
    }

    const refreshFolderPage = (folder) => {
        displayController.displayFolderPage(folder);
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

    return { initializeFolders, addFolder, deleteFolder, editFolder, getFolders, 
             getFolder, refreshFolderPage, getFolderByName, updateLocalStorage }
})();

export { logicController }