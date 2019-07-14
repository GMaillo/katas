var reglas = require('./reglas.js');

function Flush() {

}
Flush.prototype = new reglas();

Flush.prototype.belongs = function (mano1) {
    for (var i=0; i<4; i++){
        if (mano1.getSuitOfCard(i) !=mano1.getSuitOfCard(i+1)){
            return false;
        }
    }
    return true;
};

Flush.prototype.nombre = function(){
    return 'Flush';
};

module.exports = Flush;