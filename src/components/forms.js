const renderFolderForm = () => {
    const newFolderContainer = document.createElement("div");
    newFolderContainer.classList.add("new-folder-container");
    newFolderContainer.id = "folder-form";

    const newFolder = document.createElement("form");
    newFolder.id = "new-folder-form";
    newFolder.classList.add("new-folder");
    newFolderContainer.appendChild(newFolder);

    const title = document.createElement("h2");
    title.classList.add("form-title");
    title.innerText = "New Folder";
    newFolder.appendChild(title);

    const formContent = document.createElement("div");
    formContent.classList.add("form-content");
    newFolder.appendChild(formContent);

    const nameLabel = document.createElement("label");
    nameLabel.for = "folder-name";
    nameLabel.innerText = "Folder Name";
    formContent.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "folder-name";
    nameInput.id = "folder-name-input";
    nameInput.classList.add("folder-name");
    nameInput.placeholder = "Folder name..";
    formContent.appendChild(nameInput);

    const formBtns = document.createElement("div");
    formBtns.classList.add("form-btns");
    formContent.appendChild(formBtns);

    const createBtn = document.createElement("button");
    createBtn.id = "create-folder-btn";
    createBtn.classList.add("form-btn");
    createBtn.type = "submit";
    createBtn.innerText = "Create";
    formBtns.appendChild(createBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-folder-btn";
    cancelBtn.classList.add("form-btn");
    cancelBtn.type = "submit";
    cancelBtn.innerText = "Cancel";
    formBtns.appendChild(cancelBtn);

    return newFolderContainer;
}

const getFolderFormInfo = () => {
    const name = document.getElementById("folder-name-input");
    const value = name.value; 
    return value;
}

const renderTaskForm = () => {

}

const resetForm = (id) => {
    const form = document.getElementById(id);
    form.reset();
}

export { renderFolderForm, renderTaskForm, getFolderFormInfo, 
         resetForm }