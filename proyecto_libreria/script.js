class Book{
    constructor(title, author, pages, read){
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleReadStatus(){
        this.read = !this.read;
    }
}

let library = [];
function addToLibrary(libro){
    library.push(libro);
}
function crearLibro(title, author, pages, read){
    const libro = new Book(title, author, pages, read);
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
    document.querySelector("#titulo").value;
    document.querySelector("#author").value;
    document.querySelector("#pages").value;

    document.querySelector("#error-titulo").textContent ="";
    document.querySelector("#error-autor").textContent ="";
    document.querySelector("#error-paginas").textContent ="";

    document.querySelector("#titulo").setCustomValidity("");
    document.querySelector("#author").setCustomValidity("");
    modalLibro.showModal();
});
/*const formulario = document.querySelector("form");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    console.log("El formulario se está intentando enviar");
    const tituloIngresado = document.querySelector("#titulo").value;
    const authorIngresado = document.querySelector("#author").value;
    const pagesIngresado = document.querySelector("#pages").value;
    const readIngresado = document.querySelector("#read").checked;
    const libro = crearLibro(tituloIngresado, authorIngresado, pagesIngresado, readIngresado);
    addToLibrary(libro);
    mostrarLibro();
    modalLibro.close();
    formulario.reset();
})*/
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
            libroEncontrado.toggleReadStatus();
            mostrarLibro();
        }
    }
})
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const inputTitulo = document.querySelector("#titulo");
    const inputAuthor = document.querySelector("#author");
    const inputPaginas = document.querySelector("#pages");
    
    let formularioValido = true;
    if (inputTitulo.value.trim() === ""){
        inputTitulo.setCustomValidity("El titulo es Obligatorio");
        document.querySelector("#error-titulo").textContent = "El titulo es Obligatorio";
        console.log("mensaje puesto en el span:", document.querySelector("#error-titulo").textContent);
        formularioValido = false;
    }else{
        inputTitulo.setCustomValidity("");
        document.querySelector("#error-titulo").textContent = "";
    }
    if (inputAuthor.value.trim() === ""){
        inputAuthor.setCustomValidity("El nombre del autor es Obligatorio");
        document.querySelector("#error-autor").textContent = "El nombre del autor es Obligatorio";
        formularioValido = false;
    }else{
        inputAuthor.setCustomValidity("");
        document.querySelector("#error-autor").textContent = "";
    }
    if (inputPaginas.value.trim() === "" || Number(inputPaginas.value)<1){
        inputPaginas.setCustomValidity("El numero de paginas Obligatorio");
        document.querySelector("#error-paginas").textContent = "El numero de paginas es Obligatorio";
        formularioValido = false;
    }else{
        inputPaginas.setCustomValidity("");
        document.querySelector("#error-paginas").textContent = "";
    }
    console.log("El valor de formularioValido es:",formularioValido);
    if(formularioValido){
        console.log("¡El Formulario es valido! agregando libro....");
        const tituloIngresado = document.querySelector("#titulo").value;
        const autorIngresado = document.querySelector("#author").value;
        const paginasIngresadas = document.querySelector("#pages").value;
        const readIngresado = document.querySelector("#read").checked;
        const nuevoLibro = crearLibro(tituloIngresado, autorIngresado, paginasIngresadas, readIngresado);
        addToLibrary(nuevoLibro);
        mostrarLibro();
        document.querySelector("#titulo").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#pages").value = "";
        document.querySelector("#modal-libro").close();
    }
})