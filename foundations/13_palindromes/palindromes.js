const palindromes = function (string) {
    let textoLimpio = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let textoReverso = "";
    for (let i = textoLimpio.length - 1; i >= 0; i--) {
        textoReverso += textoLimpio[i];
    }
    return textoLimpio === textoReverso;


};

// Do not edit below this line
module.exports = palindromes;
