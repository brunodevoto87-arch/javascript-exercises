export function createMenuPage (){
    const menuContenedor = document.createElement("div");
    const titulo = document.createElement("h2");
    titulo.textContent = "Menu Disponible";
    menuContenedor.appendChild(titulo);
    const platos = [
        {nombre: "hamburguesa Melmac", precio: "$12"},
        {nombre: "Papas Galacticas", precio: "$5"},
        {nombre: "batido de Super leche", precio: "$4"},
    ];
    platos.forEach((plato) =>{
        const itemPlato = document.createElement("p");
        itemPlato.textContent = `${plato.nombre}-${plato.precio}`;
        menuContenedor.appendChild(itemPlato);
    });
    return menuContenedor;
}
