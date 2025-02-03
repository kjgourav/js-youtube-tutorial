// arrays

const myArr = [0,2,2,3,4,5]
const heros = ["shaktimaan","naagraj"]

const Arr = new Array( 2,3,4,4,5,6)

// console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()
//these are to dlete and add at the last place

//to first
// myArr.unshift(55)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const Air = myArr.join()//coverts arr into string type

// console.log(myArr);
// console.log(typeof Air);


console.log('A',myArr);// A [ 0, 2, 2, 3, 4, 5 ]

const myArr2 = myArr.slice(1,3);

console.log(myArr2);//[ 2, 2 ]
console.log('B',myArr);//B [ 0, 2, 2, 3, 4, 5 ]

const myArr3 = myArr.splice(1,3)

console.log(myArr3);//[ 2, 2, 3 ]
console.log('c', myArr);







