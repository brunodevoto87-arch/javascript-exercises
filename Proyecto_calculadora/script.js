let primerNumero = "";
let operador = "";
let segundoNumero = "";

function sumarNumeros(a,b){
   let resultado = a + b;
    return resultado;
}
function restarNumeros(a,b){
   let resultado = a - b;
    return resultado
}
function multiplicarNumeros(a,b){
   let resultado = a * b;
    return resultado
}
function dividirNumeros(a,b){
   let resultado = a / b;
    return resultado
}
function operate(op,num1,num2){
    if (op == "+"){
        return sumarNumeros(num1, num2);
    }else if(op == "-"){
        return restarNumeros(num1,num2);
    }else if(op == "*"){
        return multiplicarNumeros(num1, num2)
    }else if(op == "/"){
        if (num2 == 0){
            return "Ni te Atrevas!"
        }
        return dividirNumeros(num1, num2);
    }
}
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num");
numButtons.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        if (operador === ""){
        primerNumero += e.target.textContent;
        display.textContent = primerNumero;
    }else{
        segundoNumero += e.target.textContent;
        display.textContent = segundoNumero;
        }
    });
}); 
const operButtons = document.querySelectorAll(".operador");
operButtons.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        e.target.textContent;
        operador = e.target.textContent;
    })
})
const igualButton = document.querySelector(".btn-igual");
igualButton.addEventListener("click", ()=>{
    let resultado = operate(operador, parseFloat(primerNumero),parseFloat(segundoNumero));
    resultado = Math.round(resultado*10000)/10000;
    display.textContent = resultado;
    primerNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
})
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", ()=>{
    if (operador === ""){
        if(!primerNumero.includes(".")){
            primerNumero += ".";
            display.textContent = primerNumero;
            }
        }else{
            if(!segundoNumero.includes(".")){
                segundoNumero += ".";
                display.textContent = segundoNumero;
            }
        }
    });
const clearButton = document.querySelector(".btn-borrar");
clearButton.addEventListener("click",()=>{
    primerNumero = "";
    operador = "";
    segundoNumero = "";
    display.textContent = "0";
})
