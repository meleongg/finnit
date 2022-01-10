import { throwError } from "./error";
import { resetForm } from "./forms";
import { displayController } from "./display";
import { validateFns } from "./validate";

const logicController = (() => {
    let _folders = ["Inbox"];

    const addFolder = (name) => {
        if (validateFns.checkDuplicate(name, _folders)) {
            resetForm("new-folder-form");
            throwError("Folder already exists!");
        } else if (validateFns.checkEmpty(name)) {
            resetForm("new-folder-form");
            throwError("Folder name cannot be empty!");
        } else {
            _folders.push(name);
            displayController.displayMainPage(_folders);
        }
    }

    const getFolders = () => {
        return _folders; 
    }

    return { addFolder, getFolders }
})();

export { logicController }