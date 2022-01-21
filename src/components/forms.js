import { detectElms } from "./detect";
import { getMinDueDate } from "./date";

const renderFolderForm = () => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-folder-container");
    newTaskContainer.id = "folder-form";

    const newTask = document.createElement("form");
    newTask.id = "new-folder-form";
    newTask.classList.add("new-folder");
    newTaskContainer.appendChild(newTask);

    const title = document.createElement("h2");
    title.classList.add("form-title");
    title.innerText = "New Folder";
    newTask.appendChild(title);

    const formContent = document.createElement("div");
    formContent.classList.add("form-content");
    newTask.appendChild(formContent);

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

    return newTaskContainer;
}

const getFolderFormInfo = () => {
    const name = document.getElementById("folder-name-input");
    const value = name.value; 
    return value;
}

const removeFolderBtns = (folder) => {
    const children = Array.from(folder.children);
    const btnsContainer = children[children.length - 1];
    folder.removeChild(btnsContainer);
    btnsContainer.innerHTML = "";
    btnsContainer.remove();
}

const renderEditFolderForm = (folder) => {
    const nameElm = folder.children[0];
    const name = nameElm.innerText;
    folder.innerHTML = "";
    folder.style.backgroundColor = `#6ACE46`;

    const input = document.createElement("input");
    input.type = "text";
    input.value = name;
    folder.appendChild(input);

    const saveIcon = document.createElement("i");
    saveIcon.classList.add("fas");
    saveIcon.classList.add("fa-check");
    folder.appendChild(saveIcon);

    detectElms.detectSaveEditFolder(saveIcon);
}

const resetEditFolderForm = (folder) => {
    const nameElm = folder.children[0];
    const name = nameElm.innerText;
}

const getEditFolderInfo = (folder) => {
    const children = Array.from(folder.children);
    const input = children[0];
    const value = input.value;
    return value;
}

const renderTaskForm = () => {
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("new-task-container");
    newTaskContainer.id = "task-form";

    const newTask = document.createElement("form");
    newTask.id = "new-task-form";
    newTask.classList.add("new-task");
    newTaskContainer.appendChild(newTask);

    const title = document.createElement("h2");
    title.classList.add("form-title");
    title.innerText = "New Task";
    newTask.appendChild(title);

    const formContent = document.createElement("div");
    formContent.classList.add("form-content");
    newTask.appendChild(formContent);

    const nameLabel = document.createElement("label");
    nameLabel.for = "task-name";
    nameLabel.innerText = "Task Name";
    formContent.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "task-name";
    nameInput.id = "task-name";
    nameInput.classList.add("task-name");
    nameInput.placeholder = "Task name..";
    formContent.appendChild(nameInput);

    const dateLabel = document.createElement("label");
    dateLabel.for = "task-date";
    dateLabel.innerText = "Due Date";
    formContent.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.name = "task-date";
    dateInput.id = "task-date";
    dateInput.placeholder = "Due date..";
    dateInput.min = getMinDueDate();
    formContent.appendChild(dateInput);

    const descLabel = document.createElement("label");
    descLabel.for = "task-desc";
    descLabel.innerText = "Description";
    formContent.appendChild(descLabel);

    const descInput = document.createElement("input");
    descInput.type = "text";
    descInput.name = "task-desc";
    descInput.id = "task-desc";
    descInput.placeholder = "Description..";
    formContent.appendChild(descInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.for = "task-priority";
    priorityLabel.innerText = "Priority";
    formContent.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.name = "task-priority";
    priority.id = "task-priority";
    formContent.appendChild(priority);

    const urgentOption = document.createElement("option");
    urgentOption.value = "urgent";
    urgentOption.innerText = "Urgent";
    priority.appendChild(urgentOption);

    const semiUrgentOption = document.createElement("option");
    semiUrgentOption.value = "semi-urgent";
    semiUrgentOption.innerText = "Semi-Urgent";
    priority.appendChild(semiUrgentOption);

    const notUrgentOption = document.createElement("option");
    notUrgentOption.value = "not-urgent";
    notUrgentOption.innerText = "Not Urgent";
    priority.appendChild(notUrgentOption);

    const notesLabel = document.createElement("label");
    notesLabel.for = "task-notes";
    notesLabel.innerText = "Notes";
    formContent.appendChild(notesLabel);

    const notes = document.createElement("textarea");
    notes.name = "task-notes";
    notes.id = "task-notes";
    notes.cols = "30";
    notes.rows = "10";
    notes.maxLength = "30"; // TODO: make textarea non-resizable
    formContent.appendChild(notes);

    const formBtns = document.createElement("div");
    formBtns.classList.add("form-btns");
    formContent.appendChild(formBtns);

    const createBtn = document.createElement("button");
    createBtn.id = "create-task-btn";
    createBtn.classList.add("form-btn");
    createBtn.type = "submit";
    createBtn.innerText = "Create";
    formBtns.appendChild(createBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel-task-btn";
    cancelBtn.classList.add("form-btn");
    cancelBtn.type = "submit";
    cancelBtn.innerText = "Cancel";
    formBtns.appendChild(cancelBtn);

    return newTaskContainer;
}

const getTaskFormInfo = () => {
    const values = [];
    const name = document.getElementById("task-name").value;
    const date = document.getElementById("task-date").value;
    const desc = document.getElementById("task-desc").value;
    const priority = document.getElementById("task-priority").selectedOptions[0].value;
    const notes = document.getElementById("task-notes").value;
    values.push(name, date, desc, priority, notes);

    return values;
}

const resetForm = (id) => {
    const form = document.getElementById(id);
    form.reset();
}

export { renderFolderForm, renderTaskForm, getFolderFormInfo, 
         resetForm, removeFolderBtns, renderEditFolderForm,
         getEditFolderInfo, getTaskFormInfo }