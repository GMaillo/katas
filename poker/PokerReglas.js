var Flush = require('./reglas/Flush.js');
var FourOfAKind = require('./reglas/FourOfAKind.js');
var FullHouse = require('./reglas/FullHouse.js');
var HighCard = require('./reglas/HighCard.js');
var Pair = require('./reglas/Pair.js');
var StraightFlush = require('./reglas/straight flush.js');
var Straight = require('./reglas/Straight.js');
var ThreeOfAKind = require('./reglas/Three of a Kind.js');
var TwoPairs = require('./reglas/Two Pairs.js');
var resultado = require('./resultado.js');

function PokerReglas() {
    this.reglas = [
        new Flush(),
        new FourOfAKind(),
        new FullHouse(),
        new HighCard(),
        new Pair(),
        new StraightFlush(),
        new Straight(),
        new ThreeOfAKind(),
        new TwoPairs()

    ];
}

PokerReglas.prototype.resolver = function (mano1, mano2) {
    var resultado,
    numeroReglaActual = 0;
    numRegla = this.reglas.length;
    do{
        var regla = this.reglas[numeroReglaActual];
        resultado = regla.compararManos(mano1, mano2);
        numeroReglaActual++;
    } while (!resultado && numeroReglaActual < numRegla);
    return resultado ? resultado : resultado.Tie();

};

module.exports = PokerReglas;