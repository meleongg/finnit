const toggleElm = (id) => {
    const elm = document.getElementById(id);
    const flexElms = ["folder-form", "task-form"];
    const gridElms = [];
    const inlineBlkElms = ["add-folders-btn", "add-task-btn"];
    let display = window.getComputedStyle(elm).display;

    if (display !== "none") {
        console.log(display);
        elm.style.display = "none";
    } else if (flexElms.includes(id)) {
        elm.style.display = "flex";
    } else if (gridElms.includes(id)) {
        elm.style.display = "grid" 
    } else if (inlineBlkElms.includes(id)) {
        elm.style.display = "inline-block";
    } else {
        elm.style.display = "block";
    }
}

const toggleOpaque = () => {
    const opaque = document.getElementById("opaque");
    let bgColor = window.getComputedStyle(opaque).backgroundColor;
    const heading = document.getElementsByClassName("heading")[0];
    
    if (bgColor === "rgba(0, 0, 0, 0)") {
        opaque.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        opaque.style.height = "calc(100% - 70px)";
        opaque.style.width = "50%";
        heading.style.zIndex = "-2";
    } else {
        opaque.style.backgroundColor = "rgba(0, 0, 0, 0)";
        opaque.style.height = "0";
        opaque.style.width = "0";
        heading.style.zIndex = "0";
    }
}

export { toggleElm, toggleOpaque }