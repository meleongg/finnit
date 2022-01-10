import { throwError } from "./error";
import { resetForm } from "./forms";
import { displayController } from "./display";
import { validateFns } from "./validate";
import { Folder } from "./folder-class";
import { removeFolder } from "./render-folders";

const logicController = (() => {
    const defaultFolder = new Folder("Inbox", []);
    let _folders = [defaultFolder];
    // TODO: create new module dedicated to producing folder objs
    // with a name & listed tasks

    const addFolder = (name) => {
        if (validateFns.checkEmptyArr(_folders)) {
            let newFolder = new Folder(name, []);
            _folders.push(newFolder);
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
                displayController.displayMainPage(_folders);
            }
        }
    }

    const editFolder = (index, folder, newName) => {
        if (validateFns.checkDuplicate(newName, _folders)) {
             // resetForm("new-folder-form");
            throwError("Folder already exists!");
        } else if (validateFns.checkEmpty(newName)) {
            // resetForm("new-folder-form");
            throwError("Folder name cannot be empty!");
        } else {
            // let newFolder = new Folder(name, []);
            // _folders.push(newFolder);
            displayController.displayMainPage(_folders);
        }
    }

    const deleteFolder = (index, folder) => {
        _folders.splice(index, 1);
        removeFolder(folder);
        displayController.displayMainPage(_folders);
    }

    const getFolders = () => {
        return _folders; 
    }

    return { addFolder, deleteFolder, editFolder, getFolders }
})();

export { logicController }