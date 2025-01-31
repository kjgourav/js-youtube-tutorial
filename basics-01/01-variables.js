const accountId = 15533
let accountEmail = "gourav@gmaol.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// prefer not to use var beacuse of scope as it doesnot know scope 
// accountId = 2

accountEmail = "h@gmail.com"
accountPassword = "5678"
accountCity = "benagluru"

console.table([accountEmail 
     ,accountCity,  accountPassword,  accountId,accountState] );
