import {createHomePage} from "./home.js";
import {createContactPage} from "./contact.js";
import {createMenuPage} from "./menu.js";
import './styles.css';
function crearBotonesNav(){
    const botonesContenedor = document.createElement("div");
    const btnInicio = document.createElement("button");
    btnInicio.textContent = "Inicio";
    btnInicio.addEventListener("click",()=>{
        cambiarPagina(createHomePage);
    });
    botonesContenedor.appendChild(btnInicio);
    const btnMenu = document.createElement("button");
    btnMenu.textContent = "Menu";
    btnMenu.addEventListener("click",()=>{
        cambiarPagina(createMenuPage);
    });
    botonesContenedor.appendChild(btnMenu);
    const btnContacto = document.createElement("button");
    btnContacto.textContent = "Contacto";
    btnContacto.addEventListener("click",()=>{
        cambiarPagina(createContactPage);
    });
    botonesContenedor.appendChild(btnContacto);
    document.body.appendChild(botonesContenedor);
};
crearBotonesNav();
const contentDiv = document.querySelector("#content");
function cambiarPagina(nuevaPagina){
    contentDiv.innerHTML = "";
    contentDiv.appendChild(nuevaPagina());
}
cambiarPagina(createHomePage);