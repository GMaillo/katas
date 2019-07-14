function valorCartas(){

}

var valores = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

var compararValores = function (a,b) {
    return valores.indexOf(a) - valores.indexOf(b);
};

cartas.prototype.compare = function (valor1, valor2) {
    return compararValores(valor1, valor2);
};

module.exports = valorCartas;