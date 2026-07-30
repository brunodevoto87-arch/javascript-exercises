import imagenRestaurante from "./imagen-restaurante.png";
export function createHomePage(){
    const contenedor = document.createElement("div");
    const titulo = document.createElement("h1");
    titulo.textContent = "Bienvenidos a Melmac";
    contenedor.appendChild(titulo);
    const descripcion = document.createElement("p");
    descripcion.textContent = "Comida espacial, realmente de otro planeta";
    contenedor.appendChild(descripcion);
    const imagen = document.createElement("img");
    imagen.src = imagenRestaurante;
    contenedor.appendChild(imagen);
    return contenedor;
}