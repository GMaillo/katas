var cartas = require('./valorCartas.js');

function reglas() {
    this.valorCartas = new valorCartas();
}

reglas.prototype.compararManos = function (mano1, mano2) {
    if (!this.belongs(mano1) && !this.belongs(mano2)){
        return;
    }


var dif = this.belongs(mano1) - this.belongs(mano2);
if (dif) {
    return crearResultado.call(this, dif);
}

var hasta = Math.min(this.hasta(), mano1.getNumberOfGroups(), mano2.getNumberOfGroups());
for (var i=0; i<hasta; i++){
    var valorMano1 = mano1.getValueFromGroup(i);
    var valorMano2 = mano2.getValueFromGroup(i);
    dif = this.compararCartas(mano1,mano2);
    if(dif) {
        var cartaGanadora = dif > 0 ? valorMano1 : valorMano2;
        return crearResultado.call(this, dif, cartaGanadora);
    }
}
};
reglas.prototype.compararCartas = function(mano1, mano2){
    return this.valorCartas.compare(mano1, mano2);

};

reglas.prototype.hasta = function (){
    return 1;
};

function crearResultado (dif, cartaGanadora){
    var ganador = getGanador (dif);
    return new resultado (this, ganador, cartaGanadora);
}

function getGanador(dif) {
    if (dif < 0) {
        return "jugador1";
    }
    else if (dif> 0) {
        return "jugador2";
    }

}

module.exports = reglas;
