function Libro(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}   
Libro.prototype.info = function() {
        return "El libro es: " + this.title + " y el autor es: " + this.author + " tiene " + this.pages + " y " +  this.read;
}
Libro.prototype.toggleRead= function(){
    this.read = !this.read;
}
let library = [];
function addToLibrary(libro){
    library.push(libro);
}
function crearLibro(title, author, pages, read){
    const libro = new Libro(title, author, pages, read);
    return libro;
}
function mostrarLibro(){
    const contenedor = document.querySelector(".contenedor-biblioteca");
    contenedor.innerHTML = "";
    library.forEach((libro)=>{
        contenedor.innerHTML += `
        <div class = "tarjeta-libro" data-id="${libro.id}">
        <h3>${libro.title}</h3>
        <p>Autor: ${libro.author}</p>
        <p>Pages: ${libro.pages}</p>
        <p>Read: ${libro.read ? "Read" : "Not read"}</p>
        <button class = "btn-eliminar">Eliminar</button>
        <button class = "btn-toggle-read">Cambiar Estado</button>
        </div>`
    });
}
const btnNuevoLibro = document.querySelector(".btn-libro");
const modalLibro = document.querySelector("#modal-libro");
btnNuevoLibro.addEventListener("click",()=>{
    modalLibro.showModal();
});
const formulario = document.querySelector("form");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const tituloIngresado = document.querySelector("#titulo").value;
    const authorIngresado = document.querySelector("#author").value;
    const pagesIngresado = document.querySelector("#pages").value;
    const readIngresado = document.querySelector("#read").checked;
    const libro = crearLibro(tituloIngresado, authorIngresado, pagesIngresado, readIngresado);
    addToLibrary(libro);
    mostrarLibro();
    modalLibro.close();
    formulario.reset();
})
const contenedor = document.querySelector(".contenedor-biblioteca");
contenedor.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("btn-eliminar")){
        const tarjeta = evento.target.closest(".tarjeta-libro");
        const idLibro = tarjeta.dataset.id;
        library = library.filter(libro => libro.id !== idLibro);
        mostrarLibro();
    }
    if(evento.target.classList.contains("btn-toggle-read")){
        const tarjeta = evento.target.closest(".tarjeta-libro");
        const idLibro = tarjeta.dataset.id;
        const libroEncontrado = library.find(libro => libro.id === idLibro);
        if(libroEncontrado){
            libroEncontrado.toggleRead();
            mostrarLibro();
        }
    }
})