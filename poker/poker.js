var mano = require('./mano.js');
var Rules = require('./PokerReglas.js');

function Poker() {
    this.JUGADOR1 = 1;
    this.JUGADOR2 = 7;
    this.reglas = new reglas();
}

Poker.prototype.play = function (linea) {
    var jugador1mano = mano1.create(getCartas(this.JUGADOR1, linea));
    var jugador2mano = mano1.create(getCartas(this.JUGADOR2, linea));

    return this.getGanador(jugador1mano, jugador2mano);
};

function getCartas(color, linea) {
    var cards = linea.split(' ');
    return cards.slice(color, color + 5).join(' ');
}

Poker.prototype.getGanador = function (jugador1mano, jugador2mano) {
    var result = this.reglas.resolve(jugador1mano, jugador2mano);
    return result.getMensaje();
};

module.exports = Poker;