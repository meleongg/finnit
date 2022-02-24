class Task {

    constructor(name, date, desc, priority, notes, folder) {
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.priority = priority;
        this.notes = notes;
        this.status = "unchecked";
        this.folder = folder;
    }

    toggleStatus = () => {
        if (this.status === "unchecked") {
            this.status = "checked";
        } else {
            this.status = "unchecked";
        }
    }

    getFolder = () => {
        return this.folder;
    }

    getName = () => {
        return this.name;
    }

    getDate = () => {
        return this.date;
    }

    getDesc = () => {
        return this.desc;
    }
    
    getPriority = () => {
        return this.priority;
    }

    getNotes = () => {
        return this.notes;
    }

    getStatus = () => {
        return this.status;
    }

    setName = (name) => {
        this.name = name;
    }

    setDate = (date) => {
        this.date = date;
    }

    setDesc = (desc) => {
        this.desc = desc;
    }
    
    setPriority = (priority) => {
        this.priority = priority;
    }

    setNotes = (notes) => {
        this.notes = notes;
    }

    setStatus = (status) => {
        this.status = status;
    }
}

export { Task }