var myAge = 18;
if (myAge > 18) {
    console.log("you are allow");
}
else {
    console.log("you are not allow");
}
var today = "sunday";
if (today != "holiday") {
    console.log("you can enjoy");
}
else {
    console.log("you can not enjoy");
}
var shop = "Atta";
shop = "maida";
if ("Atta" != "Atta") {
    console.log("maida");
}
else {
    console.log("Atta");
}
var month = "June";
if (month == "Ramadan") {
    console.log("water bottle is not allowed");
}
else {
    console.log("water bottle is allowed");
}
//this tool is used as a short circuit and operat right side.                                
var Book = "English" || "computer";
console.log(Book);
var tool = "Bulb";
var tool1 = "Bulb" || "Ups";
console.log(tool);
var tool2 = "Bulb";
var tool3 = "Ups";
var tool4 = "No electricity ";
console.log();
//this tool is used for checking both object but it follow left side before then right.
