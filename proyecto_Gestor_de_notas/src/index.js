import {notes,findNote,addNote,deleteNote,togglePinned } from "./noteManager.js";
import {loadData, saveData} from "./storageManager.js";
import {render} from "./domManager.js";
import "./styles.css";
console.log("Arrancamos el bloc de notas");

const savedNotes = loadData();
notes.length = 0;
notes.push(...savedNotes);
if(notes.length === 0){
    addNote("Bienvenido", "Esta es tu primera nota, ¡Puedes anclarla!");
}
render(notes);

const form = document.querySelector("#note-form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const titleInput = event.target.querySelector("#note-title");
    const contentInput = event.target.querySelector("#note-content");

    const title = titleInput.value;
    const content = contentInput.value;

    if(!title || !content) return;

    addNote(title,content);
    saveData(notes);
    render(notes);

    titleInput.value = "";
    contentInput.value = "";
});

document.querySelector("#content").addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (!id) return;

    if (event.target.classList.contains("pin-btn")) {
        togglePinned(id);
        saveData(notes);
        render(notes);
    }

    if (event.target.classList.contains("delete-btn")) {
        deleteNote(id);
        saveData(notes);
        render(notes);
    }
});