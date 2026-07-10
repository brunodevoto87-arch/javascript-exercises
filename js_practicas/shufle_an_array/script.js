let arr = [1, 2, 3, 4, 5];

function shuffle(array) {
    // Tu tarea: Aplica el método .sort() sobre el 'array' que recibe por parámetro.
    // Dentro de la función flecha del sort, haz que devuelva la resta: Math.random() - 0.5;
    array.sort((a,b)=>{
        return Math.random()- 0.5;
    })
}

// Probamos la función pasándole nuestro arreglo
shuffle(arr);

// Mostramos el resultado final
console.log(arr); 
