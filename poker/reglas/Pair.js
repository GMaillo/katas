var reglas = require('./reglas.js');

function Pair() {
}
Pair.prototype = new reglas();

Pair.prototype.belongs = function (mano1) {
    return mano1.getNumberOfCardFromGroup(0) == 2;
};

Pair.prototype.nombre = function () {
    return 'Pair';
};

module.exports = Pair;