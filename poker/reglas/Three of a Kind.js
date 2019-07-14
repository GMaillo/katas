var reglas = require('./reglas.js');


function ThreeOfAKind() {
}
ThreeOfAKind.prototype = new reglas();


ThreeOfAKind.prototype.belongs = function (mano1) {
    return mano1.getNumberOfCardFromGroup(0) == 3;
};

ThreeOfAKind.prototype.nombre = function(){
    return 'Three of a kind';
};

module.exports = ThreeOfAKind;