export function render(notes){
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Mi Bloc de notas";
    contentDiv.appendChild(title);

    const form = document.createElement("form");
    form.id = "note-form";
    contentDiv.appendChild(form);

    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.placeholder = "Titulo...";
    inputTitle.id = "note-title";
    form.appendChild(inputTitle);

    const inputContent = document.createElement("input");
    inputContent.type = "text";
    inputContent.placeholder = "contenido...";
    inputContent.id = "note-content";
    form.appendChild(inputContent);

    const btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Agregar Nota";
    form.appendChild(btn);
    const sortedNotes = [...notes].sort ((a,b) => b.pinned - a.pinned);
    sortedNotes.forEach((note)=>{
        const noteCard = document.createElement("div");
        noteCard.className = "note-card";
        if(note.pinned) noteCard.style.border = "3px solid gold";
        const noteTitle = document.createElement("h3");
        noteTitle.textContent = note.title;
        noteCard.appendChild(noteTitle);
        const noteContent = document.createElement("p");
        noteContent.textContent = note.content;
        noteCard.appendChild(noteContent);
        const pinBtn = document.createElement("button");
        pinBtn.textContent = note.pinned ? "Desanclar": "Anclar";
        pinBtn.className = "pin-btn";
        pinBtn.dataset.id = note.id;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.dataset.id = note.id;
        deleteBtn.className = "delete-btn";
        noteCard.appendChild(pinBtn);
        noteCard.appendChild(deleteBtn);
        contentDiv.appendChild(noteCard);
    });
}