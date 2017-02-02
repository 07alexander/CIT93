/**
 * Created by Alex on 9/29/2016.
 */
var a = 1;
var b = true;

if (a==b){ //The comparison will coerce true into a number (1) and since 1 == 1 then Equal will read
    console.log("Equal");
}
else{console.log("Not Equal")}

if (a===b){ //Using the triple equality operator will NOT coerce the vars so it will check if 1 is equal to a boolean true and since 1 !== true, then it will read not equal
    console.log("Equal");
}
else{console.log("Not Equal");}

if (a){// Whatever you put inside the parentheses of an if statement, it will attempt to convert or coerce to a boolean, in this case the a(1) will convert into a boolean true so it will print out Something Here!
    console.log("Something Here!")
}

function hello(hello) {
    hello = hello || 'World'; // This allows you to set a default value, so if nothing is passed into this function then it defaults and prints out Hello World
    console.log("Hello " + hello+"!");

}
hello(); //There is a default value, so it will print our Hello World
hello("Alex"); //Inputting a string will skip the default value and print out Hello Alex