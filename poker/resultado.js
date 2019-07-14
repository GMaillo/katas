var carta = require('./carta.js');

function resultado(regla, ganador, cartaGanadora) {
    this.regla = regla;
    this.ganador = ganador;
    this.cartaGanadora = cartaGanadora ? ': ' + Carta.getNombre(cartaGanadora) : '';
}

Result.prototype.getMensaje = function () {
    if (!this.ganador) {
        return 'Tie.';
    }
    return this.ganador + ' victorias. - with ' + this.regla.nombre() + this.cartaGanadora;
};

resultado.Tie = function(){
    return new Result();
};

module.exports = resultado;