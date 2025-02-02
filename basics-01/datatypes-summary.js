// primitive 

// 7 categories : string,number,Boolean,null,symbol,Bigint

const score = 100 //dynamical lang js ,does not need to define the val

const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123');
const anotherId = Symbol('123')
// **************************************************
console.log(id === anotherId);//false
//both their return type is diff

// referenced type (non primitive)

// array,objects,functions
const heros = ["shaktimaan", "nagraj", "doga"]//array

let obj1 = {
    x :10,
    name : { city : "mumbai"}
}

let obj2 = obj1 

obj2.x=20

console.log(obj1); // x:20 because non primitive store refernecs to orinial value so change in obj2 is reflected in obj1
 
let obj3 = {...obj1}

obj3.x=12
console.log(obj1); // the x value in obj1 will not change because ...obj1 created a shallow copy of it in obj3 and because the primitive types 
//store direct value and if try to acces it the copy of the value will be accesed
//but if we try to change the nested object value thriugh ibj3 it will change because it stores reference and the reference will be copied of the original value


    
//stack (primitive) , heap(non-primitive)
//stack : memory allocated for a variable is allocated on stack





