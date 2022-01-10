import { renderMenu } from "./menu";
import { renderHeading } from "./heading";
import { renderFolderForm } from "./forms";
import { renderFolders } from "./render-folders";

const renderMainPage = (content, folders) => {
    const menu = renderMenu();
    const opaque = document.createElement("div");
    opaque.id = "opaque";
    const heading = renderHeading("folders");
    const folderForm = renderFolderForm();
    const foldersResult = renderFolders(folders);

    content.appendChild(menu);
    content.appendChild(opaque);
    content.appendChild(heading);
    content.appendChild(folderForm);
    content.appendChild(foldersResult);
}

export { renderMainPage }