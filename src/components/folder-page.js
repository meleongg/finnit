import { renderMenu } from "./menu";
import { renderHeading } from "./heading";
import { renderTaskForm } from "./forms";
import { renderTasks } from "./render-tasks";

const renderFolderPage = (content, folder) => {
    const menu = renderMenu();
    const opaque = document.createElement("div");
    opaque.id = "opaque";
    const heading = renderHeading(folder.name); 
    const folderForm = renderTaskForm();
    const foldersResult = renderTasks(folder);

    content.appendChild(menu);
    content.appendChild(opaque);
    content.appendChild(heading);
    content.appendChild(folderForm);
    content.appendChild(foldersResult);
}

export { renderFolderPage }