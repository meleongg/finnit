import { toggleElm, toggleOpaque } from "./toggle";
import {
    getFolderFormInfo, resetForm, removeFolderBtns,
    renderEditFolderForm, getEditFolderInfo
} from "./forms";
import { logicController } from "./logic";
import { displayController } from "./display";

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

    return {
        detectMenuClick, detectAddFolder, detectFolderCancelBtn,
        detectFolderSubmitBtn, detectEditFolder, detectDeleteFolder,
        detectSaveEditFolder, detectFolderClick
    }
})();

const resetMainPageDetects = () => {
    detectElms.detectMenuClick();
    detectElms.detectAddFolder();
    detectElms.detectFolderCancelBtn();
    detectElms.detectFolderSubmitBtn();
}

export { detectElms, resetMainPageDetects }