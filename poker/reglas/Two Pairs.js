var reglas = require('./reglas.js');

function TwoPairs() {

}
TwoPairs.prototype = new reglas();

TwoPairs.prototype.belongs = function (mano1) {
    return mano1.getNumberOfCardFromGroup(0) == 2
        && mano1.getNumberOfCardFromGroup(1) == 2;
};

TwoPairs.prototype.hasta = function () {
    return 2;
};

TwoPairs.prototype.nombre = function(){
    return 'Two pairs';
};

module.exports = TwoPairs;