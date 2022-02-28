import { detectElms } from "./detect";

const renderOptions = (name) => {
    const options = document.createElement("div");
    options.classList.add("options");

    const taskName = document.createElement("h2");
    taskName.classList.add("task-name")
    taskName.innerText = name;
    options.appendChild(taskName);

    const editDelBtns = document.createElement("div");
    editDelBtns.classList.add("edit-delete-btns");
    options.appendChild(editDelBtns);

    const editBtnA = document.createElement("a");
    editBtnA.id = "edit-task-btn";
    editDelBtns.appendChild(editBtnA);

    const editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("fa-solid");
    editBtnIcon.classList.add("fa-pen-to-square");
    editBtnA.appendChild(editBtnIcon);
    detectElms.detectEditTask(editBtnIcon);
    
    // const delBtnA = document.createElement("a");
    // delBtnA.id = "delete-task-btn";
    // editDelBtns.appendChild(delBtnA);

    // const delBtnIcon = document.createElement("i");
    // delBtnIcon.classList.add("fa-solid");
    // delBtnIcon.classList.add("fa-trash-can");
    // delBtnA.appendChild(delBtnIcon);

    return options;
}

const renderDetails1 = (info) => {
    const labels = ["Name:", "Deadline:", "Description:", "Priority:"];
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details-1");

    // REQUIRES: all elements in info must be non-zero strings
    for (let i = 0; i < info.length; i++) {
        const heading = document.createElement("h3");
        heading.classList.add("task-details1-label");
        heading.innerText = labels[i];
        taskDetails.appendChild(heading);
        
        const display = document.createElement("p");
        display.classList.add("task-details1-display");
        display.innerText = `${info[i][0].toUpperCase() + info[i].substring(1)}`;
        taskDetails.appendChild(display);
    }

    return taskDetails;
}

const renderDetails2 = (info) => {
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details-2");

    const heading = document.createElement("h3");
    heading.classList.add("task-notes-label");
    heading.innerText = "Notes:";
    taskDetails.appendChild(heading);

    const display = document.createElement("p");
    display.classList.add("task-notes-display");
    display.innerText = `${info[0].toUpperCase() + info.substring(1)}`;
    taskDetails.appendChild(display);

    return taskDetails;
}

const renderDetails3 = (info) => {
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details-3");

    const heading = document.createElement("h3");
    heading.classList.add("task-completed-label");
    heading.innerText = "Status:";
    taskDetails.appendChild(heading);

    const display = document.createElement("p");
    display.classList.add("task-completed-display");
    if (info) {
        display.innerText = "Complete";
    } else {
        display.innerText = "Incomplete";
    }
    taskDetails.appendChild(display);

    return taskDetails;
}

const renderDetails = (task) => {
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");

    const section1TaskInfo = [task.name, task.date, task.desc, task.priority];
    const section2TaskInfo = task.notes;
    const section3TaskInfo = task.status;

    const section1 = renderDetails1(section1TaskInfo);
    taskDetails.appendChild(section1);
    const section2 = renderDetails2(section2TaskInfo);
    taskDetails.appendChild(section2);
    const section3 = renderDetails3(section3TaskInfo);
    taskDetails.appendChild(section3);

    return taskDetails;
}

const renderFinishedBtns = () => {
    const finishedBtns = document.createElement("div");
    finishedBtns.classList.add("finished-btns");

    const btn = document.createElement("button");
    btn.classList.add("form-btn");
    btn.id = "done-task-btn";
    btn.type = "submit";
    btn.innerText = "Done";
    detectElms.detectExitTask(btn);
    

    finishedBtns.appendChild(btn);

    return finishedBtns;
}

const renderTask = (task) => {
    const taskOuterContainer = document.createElement("div");
    taskOuterContainer.classList.add("task-outer-container");
    taskOuterContainer.dataset.folder = task.getFolder();

    const taskInnerContainer = document.createElement("div");
    taskInnerContainer.classList.add("task-inner-container");
    taskOuterContainer.appendChild(taskInnerContainer);
    
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskInnerContainer.appendChild(taskContent);

    const options = renderOptions(task.name);
    taskContent.appendChild(options);
    const taskDetails = renderDetails(task);
    taskContent.appendChild(taskDetails);
    const btns = renderFinishedBtns();
    taskContent.appendChild(btns);

    return taskOuterContainer;
}

const getOuterContainer = () => {
    return document.getElementsByClassName("task-outer-container")[0];
}

export { renderTask, getOuterContainer }