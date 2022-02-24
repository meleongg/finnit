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
}

export { Task }