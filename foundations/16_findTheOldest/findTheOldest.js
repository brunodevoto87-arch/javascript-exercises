const findTheOldest = function(people) {
    const calcularEdad = (persona) => {
        let finDeVida = persona.yearOfDeath;
        if (!finDeVida) {
            finDeVida = new Date().getFullYear();
        }
        return finDeVida - persona.yearOfBirth;
    };
    let masViejo = people[0];
    for (let i = 0; i < people.length; i++) {
        const edadActual = calcularEdad(people[i]);
        const edadMasViejo = calcularEdad(masViejo);
        if (edadActual > edadMasViejo) {
            masViejo = people[i];
        }
    }
    return masViejo;

};

// Do not edit below this line
module.exports = findTheOldest;
