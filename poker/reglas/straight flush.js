var reglas = require('./reglas.js');

function StraightFlush() {
}
StraightFlush.prototype = new reglas();

StraightFlush.prototype.belongs = function (mano1) {
    for (var i = 0; i < 4; i++) {
        if (mano1.getSuitOfCard(i) != mano1.getSuitOfCard(i + 1) ||
            (-1 != this.compareCards(mano1.getValueOfCard(i), mano1.getValueOfCard(i + 1)))) {
            return false;
        }
    }
    return true;
};

StraightFlush.prototype.nombre = function () {
    return 'Straight flush';
};

module.exports = StraightFlush;