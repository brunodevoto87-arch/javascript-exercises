function saveData(projects){
    const jsonString = JSON.stringify(projects);
    localStorage.setItem("todoData", jsonString);
}
function loadData(){
    const jsonString = localStorage.getItem("todoData");
    if (jsonString){
        return JSON.parse(jsonString);
    }
    else{
        return [];
    }
}
export {saveData, loadData};