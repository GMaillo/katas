function carta(valor, suit) {
    this.valor = valor;
    this.suit = suit;
}

carta.create = function (cartaString) {
    return new carta(cartaString[0], cartaString[1])
};

carta.prototype.getValor = function () {
    return this.valor;
};

carta.prototype.getSuit = function () {
    return this.suit;
};

var nombreCarta = {J: 'Jack', Q: 'Queen', K: 'King', A: 'Ace'};

Card.getNombre = function(numero){
    return nombreCarta[numero] ? nombreCarta[numero] : numero;
};

module.exports = carta;