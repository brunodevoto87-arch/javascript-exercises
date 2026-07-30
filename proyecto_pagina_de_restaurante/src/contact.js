export function createContactPage(){
    const contactoContenedor = document.createElement("div");
    const titular = document.createElement("h2");
    titular.textContent = "Contacto";
    contactoContenedor.appendChild(titular);
    const direccion = document.createElement("p");
    direccion.textContent = "Calle Falsa 123, Melmac";
    contactoContenedor.appendChild(direccion);
    const telefono = document.createElement("p");
    telefono.textContent = "Tel: 555-ALF-123";
    contactoContenedor.appendChild(telefono);
    return contactoContenedor;
}