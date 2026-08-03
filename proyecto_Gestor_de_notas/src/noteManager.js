let notes = []
function addNote(title, content){
    const newNote = {
        id: Date.now().toString(),
        title: title,
        content: content,
        pinned: false
    };
    notes.push(newNote);
}
function findNote(id){
    return notes.find(note => note.id === id);
}
function deleteNote(id){
        const note = findNote(id)
        if (note){
            const index = notes.indexOf(note);
            notes.splice(index, 1);
        }
    }
function togglePinned(id){
    const note = findNote(id);
    if (note){
        note.pinned = !note.pinned;
    }
}
export {notes,findNote,addNote,deleteNote,togglePinned};
