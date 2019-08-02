// console.log(arguments);

// console.log(require('module').wrapper);

//module export
const calk = require('./test-module1');
const calk1 = new calk();
console.log(calk1.add(4, 5));

//exports
const { mul } = require('./test-module-2');
console.log(mul(4, 25));
