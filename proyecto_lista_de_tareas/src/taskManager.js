let projects = [];

function addProject(name){
    const newProject = {
        id: Date.now().toString(),
        name: name,
        tasks: []
    };
    projects.push(newProject);
}

function findProject(projectId){
    return projects.find(project => project.id === projectId);
}

function addTaskToProject(projectId, taskText){
    const project = findProject(projectId);
    if(project){
        const newTask = {
            title: taskText,
            completed: false,
        };
        project.tasks.push(newTask);
    }
}

function deleteTask(projectId, taskIndex){
    const project = findProject(projectId);
    if(project){
        project.tasks.splice(taskIndex, 1);
    }
}

function toggleTask(projectId, taskIndex){
    const project = findProject(projectId);
    if(project){
        const task = project.tasks[taskIndex];
        if (task){
            task.completed = !task.completed;
        }
    }
}

export {projects, addProject, findProject, addTaskToProject, deleteTask, toggleTask};