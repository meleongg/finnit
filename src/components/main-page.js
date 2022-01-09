import { renderMenu } from "./menu";
import { renderHeading } from "./heading";
import { renderFolderForm } from "./forms";

const renderMainPage = (content) => {
    const menu = renderMenu();
    const heading = renderHeading("folders");
    const folderForm = renderFolderForm();

    content.appendChild(menu);
    content.appendChild(heading);
    content.appendChild(folderForm);
}

export { renderMainPage }