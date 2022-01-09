const renderHeading = (type) => {
    const heading = document.createElement("div");
    heading.classList.add("heading");

    const headingTitle = document.createElement("h1");
    headingTitle.classList.add("heading-title");
    headingTitle.innerText = `${type[0].toUpperCase() + type.substring(1)}`;
    heading.appendChild(headingTitle);

    const addBtn = document.createElement("a");
    addBtn.classList.add("add-btn")
    addBtn.id = `add-${type}-btn`;
    heading.appendChild(addBtn)

    const addBtnIcon = document.createElement("i");
    addBtnIcon.classList.add("fas");
    addBtnIcon.classList.add("fa-plus-circle");
    addBtn.appendChild(addBtnIcon);

    return heading;
}

// TODO: changeHeading function to change between Folders & Folder

export { renderHeading }