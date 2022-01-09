const toggleElm = (id) => {
    const elm = document.getElementById(id);
    const flexElms = ["folder-form"];
    const gridElms = [];
    let display = window.getComputedStyle(elm).display;

    if (display !== "none") {
        elm.style.display = "none";
    } else if (flexElms.includes(id)) {
        elm.style.display = "flex";
    } else if (gridElms.includes(id)) {
        elm.style.display = "grid" 
    } else {
        elm.style.display = "block";
    }
}

export { toggleElm }