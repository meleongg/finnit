const validateFns = (() => {
    const checkEmptyArr = (folders) => {
        if (folders.length === 0) {
            return true;
        } 

        return false;
    }

    const _getFolderNames = (folders) => {
        let names = [];
        for (let i = 0; i < folders.length; i++) {
            names.push(folders[i].name);
        }

        return names;
    }

    const checkDuplicate = (name, folders) => {
        const names = _getFolderNames(folders);
        if (names.includes(name)) {
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
    
    const checkDefault = (index) => {
        if (index == 0) {
            return true;
        }

        return false;
    }

    const checkNoChange = (newName, oldName) => {
        console.log(newName, oldName)
        if (newName === oldName) {
            return true;
        }

        return false;
    }

    return { checkEmptyArr, checkDuplicate, checkEmpty, checkDefault,
             checkNoChange };
})();

export { validateFns }