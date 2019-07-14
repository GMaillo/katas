var reglas = require('./reglas.js');

function FullHouse(){

}
FullHouse.prototype = new reglas();
FullHouse.prototype.belongs = function (mano1) {
    return mano1.getNumberOfCardFromGroup(0) == 3 && mano1.getNumberOfCardFromGroup(1) == 2;

};

FullHouse.prototype.name = function (){
    return 'Full house';
};

module.exports = FullHouse;