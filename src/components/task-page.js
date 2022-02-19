import { renderMenu } from "./menu";
import { renderHeading } from "./heading";
import { renderTask } from "./render-task";

const renderTaskPage = (content, task) => {
    const menu = renderMenu();
    const opaque = document.createElement("div");
    opaque.id = "opaque";
    const heading = renderHeading(task.name, false); 
    const taskContent = renderTask(task);

    content.appendChild(menu);
    content.appendChild(opaque);
    content.appendChild(heading);
    content.appendChild(taskContent);
}

export { renderTaskPage }