var reglas = require('./reglas.js');

function HighCard() {

}
HighCard.prototype = new reglas();

HighCard.prototype.belongs = function (mano1) {
    return true;
};

HighCard.prototype.hasta = function () {
    return 999;
};

HighCard.prototype.nombre = function () {
    return 'High card'
};

module.exports = HighCard;