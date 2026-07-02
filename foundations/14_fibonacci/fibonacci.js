const fibonacci = function(n) {
    const posicion = Number(n);
    if (posicion < 0) {
        return "OOPS";
    } else if (posicion === 0) {
        return 0;
    } else if (posicion === 1 || posicion === 2) {
        return 1;
    }
    let a = 1;
    let b = 1;
    let result = 0;

    for (let i = 3; i <= posicion; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
