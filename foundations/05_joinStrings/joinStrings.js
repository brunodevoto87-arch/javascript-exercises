// Add your code right below, good luck!
const firstName = "Carlos";
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear = 1947;

// PASO 2 y PASO 3: Estas variables deben ir FUERA de la función
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

// La función del ejercicio
const joinStrings = function (string1, string2) {
  // Como las variables ya están calculadas arriba, solo devolvemos el saludo
  return greeting;
}

// Do not change this (Exportamos todas las variables y la función en un solo objeto)
module.exports = {
  firstName,
  lastName,
  thisYear,
  birthYear,
  fullName,
  age,
  greeting,
  joinStrings
};