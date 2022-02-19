class Task {

    constructor(name, date, desc, priority, notes) {
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.priority = priority;
        this.notes = notes;
        this.status = "unchecked";
    }

    toggleStatus = () => {
        if (this.status === "unchecked") {
            this.status = "checked";
        } else {
            this.status = "unchecked";
        }
    }
}

export { Task }