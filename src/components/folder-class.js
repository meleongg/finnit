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

    parseTasks = (parsedObjects) => {
        
    }

    updateTaskStatus = (index) => {
        this.tasks[index].toggleStatus();
    }

    addTask = (task) => {
        this.tasks.push(task);
    }

    editTask = (task, vals) => {
        let name = vals[0];
        let date = vals[1];
        let desc = vals[2];
        let priority = vals[3];
        let notes = vals[4];
        let status = vals[5];

        task.name = name;
        task.date = date; 
        task.desc = desc; 
        task.priority = priority; 
        task.notes = notes; 
        task.status = status; 
    }

    deleteTask = (index) => {
        this.tasks.splice(index, 1);
    }

    getTaskByIndex = (index) => {
        return this.tasks[index];
    }

    getTaskByName = (taskName) => {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].name === taskName) {
                return this.tasks[i];
            }
        }
    }
}

export { Folder }