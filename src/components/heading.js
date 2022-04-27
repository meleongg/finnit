const renderHeading = (type, needAddBtn) => {
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.id = "heading";

    const headingTitle = document.createElement("h1");
    headingTitle.classList.add("heading-title");
    // headingTitle.innerText = `${type[0].toUpperCase() + type.substring(1)}`;
    headingTitle.innerText = type;
    heading.appendChild(headingTitle);

    if (type !== "Folders" && type !== "All Tasks" && type !== "Today's Tasks" && type !== "This Week's Tasks") {
        const backBtn = document.createElement("a")
        backBtn.id = "back-btn";
        backBtn.classList.add("back-btn");
        heading.appendChild(backBtn);

        const backBtnIcon = document.createElement("i");
        backBtnIcon.classList.add("fas");
        backBtnIcon.classList.add("fa-chevron-circle-left");
        backBtn.appendChild(backBtnIcon);
    }

    if (needAddBtn) {
        const addBtn = document.createElement("a");
        addBtn.classList.add("add-btn");

        if (type === "Folders") {
            addBtn.id = `add-folders-btn`;
        } else {
            addBtn.id = `add-task-btn`;
        }

        heading.appendChild(addBtn)

        const addBtnIcon = document.createElement("i");
        addBtnIcon.classList.add("fas");
        addBtnIcon.classList.add("fa-plus-circle");
        addBtn.appendChild(addBtnIcon);
    }

    return heading;
}

const getHeading = () => {
    const heading = document.getElementsByClassName("heading-title")[0];
    let text = heading.innerText;

    return text;
}

export { renderHeading, getHeading }