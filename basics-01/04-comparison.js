console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
//the reason - equality check(==) and comaprisons(>,<,<=) are treated diff 
//comaprisons convert null to num ,treat it as 0 thats why >= is true
//avoid these types of comparison

//=== (strict conversion) it will check data type and all

console.log("2"=== 2);
