import {Operation} from './module.js';


const op = new Operation(Number(process.argv[2]),Number(process.argv[3]));
// console.log(process.argv)
// const op = new Operation(2,2);
console.log(op.sum());