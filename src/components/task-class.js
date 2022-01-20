class Task {
    status = "unchecked";

    constructor(name, date, desc, priority, notes) {
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.priority = priority;
        this.notes = notes;
    }
}

export { Task }