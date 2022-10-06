var lodash = require('lodash');
var myArray = [1,2,3,4,5,6,7,8,9,10,11,12];

// function shuffle(myArray) {
//     for(var i=0; i < 12; ++i) {
//         myArray.push(parseInt(Math.random()*12));
//     } return myArray
// }

console.log(lodash.shuffle(myArray));