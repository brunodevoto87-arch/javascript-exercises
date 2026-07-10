let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

/*
  TU MISIÓN: Crear una variable 'usersMapped' usando .map() que devuelva esto:
  [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
*/
let usersMapped = users.map(user => ({
    fullname: user.name + " " + user.surname,
    id: user.id
 }));
console.log(usersMapped);
