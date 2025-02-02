const score = 400
// console.log(score);//400

const balance = new Number(100)
// console.log(balance);// [number: 100] specifically marks it as number

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//=> 100.00 } it is for decimals

const num2 = 123.899

// console.log(num2.toPrecision(4));//123.9 ,gives a precise value if it was 3 then 124


const hundred = 100000
// console.log(hundred.toLocaleString('en-IN'));//1,00,000

//**********************MATHS***********************//

// console.log(Math);//it is an object which can have many values in the body like an obj
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.9));
// console.log(Math.min(5,9,6,7));
// console.log(Math.max(5,9,4,7));


console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max - min)) + min );





