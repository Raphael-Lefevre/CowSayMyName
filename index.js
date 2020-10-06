const mesInfos = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello I'am ${mesInfos.name} form ${mesInfos.campus}`,
    e : "oO",
    T : "U "

}));