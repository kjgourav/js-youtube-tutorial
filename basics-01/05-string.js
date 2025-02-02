const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value" ); this is outdated way

// console.log(`hello my name is ${name} and 
    // my repo count is ${repoCount}`);//string interpolation ,we create a placeholder
    // and then we fill it with the value of the variable
    // we can also use template literals to create a new string with the value of the variable  


//another way
const game = new String('gourav-kj-kk')//in this way it will help us have many prototypes that are functions and also it views the string as in indexes 

console.log(game);//prints [string:'gourav']
console.log(game[1]);//prints o at index 1
console.log(game[4]);//prints a at index 4

//as we see this way of declaring string helps us:
//by providing many built in functions we can know all of them if we run this in the browser console
//like these:
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.indexOf('g'));
console.log(game.charAt('2'));


// const string3 = game.substring(0,4)
// console.log(string3);//last number is n-1 so if it is 4 then 0-3 will rpint

const string2 = game.slice(4,-1);// => av-k
console.log(string2);

const newString = "   hitesh   "
console.log(newString);//=>'   hitesh    '
console.log(newString.trim());//=>hitesh


const url = "https://gourav.com/gourav%20jadoun"//browser repplaces spaces with %20 or other things 

console.log(url.replace('%20','_'));//replaces %20 with '_'

console.log(url.includes('gourav'));//true

const str = game.split('-')

console.log(str);//returns array ['gourav','kj','kk']

//split takes a pattern ,based on that divides the string into substring
//converts the substring into array and returns it

