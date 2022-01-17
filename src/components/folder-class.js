class Folder {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask = (task) => {
        this.tasks.push(task);
    }
}

export { Folder }