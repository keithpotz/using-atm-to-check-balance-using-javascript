var balance = 0.00;
var checkBalance = false;
var isActive = true;

// your code goes here
if (checkBalance === true && isActive === true && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
}
else if (checkBalance === true && isActive === true && balance < 0){
    console.log("Your balance is negative. Please contact bank.");
}
else if(checkBalance === true && isActive === false){
    console.log("Your account is no longer active.");
}
else if(checkBalance === true && balance === 0 && isActive === true){
    console.log("Your account is empty.");
}
else if (checkBalance === false && isActive === true){
    console.log("Thank you. Have a nice day!");
}
