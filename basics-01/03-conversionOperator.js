let score = "hitesh" //first the valur was string

// console.log(typeof(score));//so it will print the type of score which was string 

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);//nan = not a number but the datatype is number


//"33" => 33
//"33abc" => NaN 
// ture => 1 : false => 0

let isLoggedIn  = "gourav"

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true ; 0=> false
//  ""=> false
//  "hitesh" => true

let someNum = 33

let stringNum = String(someNum)
// console.log(stringNum);
// console.log(typeof stringNum);


// **************************** operations *********

let  value = 3 
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1+ str2
// console.log(str3);

// console.log("1"+2);// 11
// console.log(1+"2" + 2);//122
// console.log("1" +2 + 2);//122
// console.log(1 +2 +"2" + 2);//322
// after something is string automatically teh next value will be converted to string
//but in the 4th one furst two letters are no so theya re added up like noraml and after that its string so the number after the string was also taken as string

// console.log(+true);//1
// console.log(+"");//0

let gameCounter = 100
gameCounter++;

console.log(gameCounter);