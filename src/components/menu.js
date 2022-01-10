const renderMenu = () => {
    const menu = document.createElement("div");
    menu.id = "menu";

    const foldersTitle = document.createElement("div");
    foldersTitle.id = "folders-title";
    foldersTitle.classList.add("menu-tab");
    menu.appendChild(foldersTitle);

    const foldersTitleIcon = document.createElement("i");
    foldersTitleIcon.classList.add("fas");
    foldersTitleIcon.classList.add("fa-folder");
    foldersTitle.appendChild(foldersTitleIcon);

    const foldersLink = document.createElement("a");
    foldersLink.classList.add("menu-title");
    foldersLink.innerText = "Folders";
    foldersTitle.appendChild(foldersLink);


    const todayTitle = document.createElement("div");
    todayTitle.id = "today-title";
    todayTitle.classList.add("menu-tab");
    menu.appendChild(todayTitle);

    const todayTitleIcon = document.createElement("i");
    todayTitleIcon.classList.add("fas");
    todayTitleIcon.classList.add("fa-calendar-day");
    todayTitle.appendChild(todayTitleIcon);

    const todayLink = document.createElement("a");
    todayLink.classList.add("menu-title");
    todayLink.innerText = "Today";
    todayTitle.appendChild(todayLink);


    const thisWeekTitle = document.createElement("div");
    thisWeekTitle.id = "this-week-title";
    thisWeekTitle.classList.add("menu-tab");
    menu.appendChild(thisWeekTitle);

    const thisWeekTitleIcon = document.createElement("i");
    thisWeekTitleIcon.classList.add("fas");
    thisWeekTitleIcon.classList.add("fa-calendar-week");
    thisWeekTitle.appendChild(thisWeekTitleIcon);

    const thisWeekLink = document.createElement("a");
    thisWeekLink.classList.add("menu-title");
    thisWeekLink.innerText = "This Week";
    thisWeekTitle.appendChild(thisWeekLink);


    const allTasksTitle = document.createElement("div");
    allTasksTitle.id = "folders-title";
    allTasksTitle.classList.add("menu-tab");
    menu.appendChild(allTasksTitle);

    const allTasksTitleIcon = document.createElement("i");
    allTasksTitleIcon.classList.add("fas");
    allTasksTitleIcon.classList.add("fa-tasks");
    allTasksTitle.appendChild(allTasksTitleIcon);

    const allTasksLink = document.createElement("a");
    allTasksLink.classList.add("menu-title");
    allTasksLink.innerText = "All Tasks";
    allTasksTitle.appendChild(allTasksLink);

    return menu;
}


export { renderMenu }