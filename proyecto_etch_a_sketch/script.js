const contenedor = document.querySelector("#contenedor");
const btnReDimensionador = document.querySelector("#btn-redimensionar");

function generarCuadraditos(porLado){
    const totalCuadrados = porLado*porLado;
    const tamañoPixel = 960/porLado;
    for(let i=0; i < totalCuadrados;i++){
        const variableDiv = document.createElement("div");
        variableDiv.classList.add("cuadrado");
        variableDiv.style.width = `${tamañoPixel}px`;
        variableDiv.style.height = `${tamañoPixel}px`;
        variableDiv.addEventListener("mouseover", () =>{
            variableDiv.style.backgroundColor = "black";
        })
        contenedor.appendChild(variableDiv);
     }
}
btnReDimensionador.addEventListener("click",()=>{
    let tamaño = prompt("Introduce cantidad de cuadrados por lado (max100):");
    contenedor.innerHTML = "";
    generarCuadraditos(tamaño);
})
generarCuadraditos(16);
