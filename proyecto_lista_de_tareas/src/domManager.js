export function render(projects){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Mi lista de Tareas";
    contentDiv.appendChild(title);

    const form = document.createElement("form");
    form.id = "task-form";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escriba una tarea";
    input.id = "new-task-input";
    form.appendChild(input);

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Agregar tarea";
    form.appendChild(button);
    contentDiv.appendChild(form);

    projects.forEach((project)=>{
        const projectDiv = document.createElement("div");
        projectDiv.textContent = `${project.name}`;
        contentDiv.appendChild(projectDiv);

        const taskList = document.createElement("ul");
        project.tasks.forEach((task, index) =>{
            const taskItem = document.createElement("li");
            taskItem.textContent = task.title;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.projectId = project.id;
            checkbox.dataset.taskIndex = index;

            if (task.completed) {
                checkbox.checked = true;
                taskItem.style.textDecoration = "line-through";
            }

            taskItem.prepend(checkbox);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.dataset.projectId = project.id;
            deleteButton.dataset.taskIndex = index;
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
        contentDiv.appendChild(taskList);
    });
}
