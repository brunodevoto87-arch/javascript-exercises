let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];


let names = users.map(users => user.name);

console.log(names); // Debería mostrar en consola: ["John", "Pete", "Mary"]
