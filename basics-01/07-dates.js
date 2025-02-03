// dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreateDate = new Date(2023,0,29);
// let mycreateDate = new Date(2023,0,29,5,6);
let mycreateDate = new Date("01-14-2023");
// console.log(mycreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

console.table(mycreateDate.toLocaleString('default',{
    weekday : "long",
    
}))




