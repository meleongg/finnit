import { renderMenu } from "./menu";
import { renderHeading } from "./heading";
// import { renderTaskForm } from "./forms";

const renderTaskPage = (content, task) => {
    const menu = renderMenu();
    const opaque = document.createElement("div");
    opaque.id = "opaque";
    const heading = renderHeading(folder.name); 
    // const taskContent = renderTask(task);

    content.appendChild(menu);
    content.appendChild(opaque);
    content.appendChild(heading);
    // content.appendChild(folderForm);
}

export { renderTaskPage }