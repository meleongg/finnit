const renderFolder = (name) => {
    const folder = document.createElement("div");
    folder.classList.add("folder");

    const heading = document.createElement("h2");
    heading.classList.add("folder-name");
    heading.innerText = name;
    folder.appendChild(heading);

    const actBtns = document.createElement("div");
    actBtns.classList.add("act-btns");
    folder.appendChild(actBtns);

    const editBtn = document.createElement("a");
    editBtn.classList.add("edit-btn");
    actBtns.appendChild(editBtn);

    const editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("fas");
    editBtnIcon.classList.add("fa-edit");
    editBtn.appendChild(editBtnIcon);

    const delBtn = document.createElement("a");
    delBtn.classList.add("del-btn");
    actBtns.appendChild(delBtn);

    const delBtnIcon = document.createElement("i");
    delBtnIcon.classList.add("fas");
    delBtnIcon.classList.add("fa-trash-alt");
    delBtn.appendChild(delBtnIcon);
    
    return folder;
}

const renderFolders = (folders) => {
    const foldersDir = document.createElement("div");
    foldersDir.classList.add("folders-dir");
    foldersDir.id = "folders-dir";

    const foldersDiv = document.createElement("div");
    foldersDiv.classList.add("folders");
    foldersDir.appendChild(foldersDiv);

    for (let i=0; i<folders.length; i++) {
        const oneFolder = renderFolder(folders[i]);
        foldersDiv.appendChild(oneFolder);
    }

    return foldersDir;
}   

export { renderFolders }