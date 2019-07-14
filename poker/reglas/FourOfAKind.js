var reglas = require('./reglas.js');

function FourOfAKind() {

}

FourOfAKind.prototype = new reglas();
FourOfAKind.prototype.belongs = function (mano1){
    return mano1.getNumberOfCardFromGroup(0) == 4;
};

FourOfAKind.prototype.nombre = function (){
    return 'Four of a kind';
};

module.exports = FourOfAKind;