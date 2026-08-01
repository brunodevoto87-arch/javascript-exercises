import {projects, addProject, addTaskToProject, deleteTask, toggleTask} from "./taskManager.js";
console.log("PROJECTS IMPORTADOS:", projects);
import {loadData, saveData} from "./storageManager.js";
import {render} from "./domManager.js";

console.log("Arrancando la app..");

const savedProjects = loadData();
projects.length = 0;
projects.push(...savedProjects);

if (projects.length === 0){
    addProject("Proyecto por defecto");
}

render(projects);

const form = document.querySelector("#task-form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const input = event.target.querySelector("#new-task-input");
    const taskText = input.value;
    if(!taskText) return;

    addTaskToProject(projects[0].id, taskText);
    saveData(projects);
    render(projects);
    input.value = "";
});

document.querySelector(".content").addEventListener("click",(evento)=>{
    const deleteButton = evento.target.closest("button[data-task-index]");

    if(deleteButton){
        const projectId = deleteButton.dataset.projectId;
        const taskIndex = parseInt(deleteButton.dataset.taskIndex, 10);
        deleteTask(projectId, taskIndex);
        saveData(projects);
        render(projects);
    }
});

document.querySelector(".content").addEventListener("change", (evento)=>{
    if (evento.target.type === "checkbox"){
        const projectId = evento.target.dataset.projectId;
        const taskIndex = parseInt(evento.target.dataset.taskIndex, 10);
        toggleTask(projectId, taskIndex);
        saveData(projects);
        render(projects);
    }
});

export {saveData};
