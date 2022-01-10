const validateFns = (() => {
    const checkDuplicate = (name, folders) => {
        if (folders.includes(name)) {
            return true;
        } 
        return false;
    }

    const checkEmpty = (name) => {
        const str = name.replace(/\s/g,"")
        if (str === "") {
            return true;
        }
        return false;
    }

    return { checkDuplicate, checkEmpty };
})();

export { validateFns }