import { detectElms } from "./detect"

const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const status = document.createElement("input");
    status.name = "task-complete";
    status.class = "task-complete";
    status.type = "checkbox";
    if (task.status === "checked") {
        status.checked = true;
    } else {
        status.checked = false;
    }
    taskDiv.appendChild(status);
    detectElms.detectTaskCheckbox(status);

    const heading = document.createElement("h2");
    heading.classList.add("folder-name");
    heading.innerText = task.name;
    taskDiv.appendChild(heading);
    detectElms.detectTaskClick(heading); 

    const dueDate = document.createElement("h2");
    dueDate.classList.add("task-due-date");
    dueDate.innerText = task.date;
    taskDiv.appendChild(dueDate);
    
    const delBtn = document.createElement("a");
    delBtn.classList.add("del-btn");
    taskDiv.appendChild(delBtn);

    const delBtnIcon = document.createElement("i");
    delBtnIcon.classList.add("fas");
    delBtnIcon.classList.add("fa-trash-alt");
    delBtn.appendChild(delBtnIcon);
    detectElms.detectDeleteTask(delBtnIcon);
    
    return taskDiv;
}

const renderTasks = (folder) => {
    const tasksList = document.createElement("div");
    tasksList.classList.add("folders-dir");
    tasksList.id = "folders-dir";

    const tasks = document.createElement("div");
    tasks.classList.add("folders");
    tasks.appendChild(tasksList);

    for (let i=0; i<folder.tasks.length; i++) {
        const oneTask = renderTask(folder.tasks[i]);
        oneTask.dataset.index = i;
        tasksList.appendChild(oneTask);
    }

    return tasksList;
}

export { renderTasks }