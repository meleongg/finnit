import { Task } from "./task-class";

class Folder {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    createTask = (values) => {
        const name = values[0];
        const date = values[1];
        const desc = values[2];
        const priority = values[3];
        const notes = values[4];
        const folder = values[5];
        const task = new Task(name, date, desc, priority, notes, folder);

        return task;
    }

    updateTaskStatus = (index) => {
        this.tasks[index].toggleStatus();
    }

    addTask = (task) => {
        this.tasks.push(task);
    }

    deleteTask = (index) => {
        this.tasks.splice(index, 1);
    }

    getTaskByIndex = (index) => {
        return this.tasks[index];
    }

    // TODO: error here when editing!
    getTaskByName = (taskName) => {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].name === taskName) {
                return this.task[i];
            }
        }
    }
}

export { Folder }