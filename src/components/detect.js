import { toggleElm } from "./toggle";

const detectMenuClick = () => {
    const menuToggle = document.getElementById("menu-toggle-btn");
    menuToggle.addEventListener("click", () => {
        toggleElm("menu");
    });
}

const detectAddFolder = () => {
    const btn = document.getElementById("add-folders-btn");
    btn.addEventListener("click", () => {
        toggleElm("add-folders-btn");
        toggleElm("folder-form");
    });
}

export { detectMenuClick, detectAddFolder }