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

    const editFolder = (index, folder, newName, oldName) => {
        if (validateFns.checkNoChange(newName, oldName)) {
            _folders[index].name = newName;
            displayController.displayMainPage(_folders);
        } else {
            if (validateFns.checkDuplicate(newName, _folders)) {
                throwError("Folder already exists!");
            } else if (validateFns.checkEmpty(newName)) {
                throwError("Folder name cannot be empty!");
            } else {
                _folders[index].name = newName;
                displayController.displayMainPage(_folders);
            }
        }
    }

    const deleteFolder = (index, folder) => {
        if (validateFns.checkDefault(index)) {
            throwError(`Cannot delete ${_folders[index].name}! Must have at least 1 folder.`)
        } else {
            _folders.splice(index, 1);
            removeFolder(folder);
            displayController.displayMainPage(_folders);
        }
    }

    const getFolders = () => {
        return _folders; 
    }

    const getFolder = (index) => {
        return _folders[index];
    }

    return { addFolder, deleteFolder, editFolder, getFolders, getFolder }
})();

export { logicController }