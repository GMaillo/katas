var reglas = require('./reglas.js');

function Straight() {
}
Straight.prototype = new reglas();

Straight.prototype.belongs = function (mano1) {
    for (var i = 0; i < 4; i++) {
        if (-1 != this.compararCartas(mano1.getValueOfCard(i), mano1.getValueOfCard(i + 1))) {
            return false;
        }
    }
    return true;
};

Straight.prototype.nombre = function () {
    return 'Straight';
};

module.exports = Straight;