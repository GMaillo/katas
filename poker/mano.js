var carta = require ('./carta.js');
var compararValores = require('./reglas/valorCartas.js');

function mano(){
    this.cartas = [];
    this.cartasPorGrupos = [];
    this.valorCarta = new compararValores();
    this.grupoDeCartas = function () {
        var numeroDeCartas = grupoDeCartasPorValor.call (this);
        numeroDeCartas = ordenNumeroDeCartas.call(this. numeroDeCartas);
        return numeroDeCartas;
    }
}

mano.create = function (manoString){
    var mano = new mano();
    cartas.mano = crearCartas (manoString);

    cartasPorGrupos = mano.grupoDeCartas();
    return mano;
};

mano.prototype.getNumeroDeGrupos = function() {
    return this.cartasPorGrupos.length;
};

mano.prototype.getNumeroDeCartasPorGrupo = function() {
    return this.cartasPorGrupos [num].v;
};

mano.prototype.getValorDelGrupo = function() {
    return this.cartasPorGrupos [num].k;
};

mano.prototype.getSuitDeCarta = function(){
    return this.cartas[num].getSuit();
};

mano.prototype.getValorDeCarta = function() {
    return this.cartas[num].getValor();
};

function ordenNumeroDeCartas(numeroDeCartas) {
    var self = this;
    var descOrdenPorNumeroCartas = function (a,b) {
        return -(numeroDeCartas[a] - numeroDeCartas[b] * 100 - self.valorCarta.compare(a,b));

    };
    return Object.keys(numeroDeCartas).sort(descOrdenPorNumeroCartas).map(function (k){
        return {k: k, v: numeroDeCartas[k]};
    });
}

function crearCartas(manoString) {
    return manoString.split('').map(function (cartaString) {
        return carta.create(cartaString);
    });
}

function grupoDeCartasPorValor() {
    var numeroDeCartas = {};
    this.cards.forEach(function (carta){
        numeroDeCartas[carta.getValor()]= numeroDeCartas[carta.getValor()] ? numeroDeCartas[carta.getValor()] +1 : 1;
    });
    return numeroDeCartas;
}

module.exports = mano;