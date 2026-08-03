function saveData(notes){
    const jsonString = JSON.stringify(notes);
    localStorage.setItem("notesData", jsonString);
}
function loadData(){
    const jsonString = localStorage.getItem("notesData");
    if(jsonString){
        return JSON.parse(jsonString);
    }else{
        return[];
    }
}
export {saveData, loadData};