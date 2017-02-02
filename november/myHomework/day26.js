/**
 * Created by Alex on 11/10/2016.
 */
//Homework Day 26

//Section 4 Lecture 45 - Framework Aside: IIFEs and Safe Code
(function(global, name){
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(window, 'John'));
console.log(greeting);

var greeting = 'Hola';

//Section 4 Lecture 46 - Understanding Closures
function greet(whattosay){
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}
var sayHi = greet('Hi');
sayHi('Tony');


//Section 4 Lecture 47 - Understanding Closures - Part 2
function buildFunctions(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

function buildFunctions2(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();


//Section 4 Lecture 48 - Framework Aside: Function Factories
function makeGreeting(language){
    return function(firstname, lastname){
        if (language === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


//Section 4 Lecture 49 - Closures and Callbacks
function sayHiLater() {
    var greeting = 'Hi!';
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}
sayHiLater();
function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;
    callback();
}
tellMeWhenDone(function(){
    console.log('I am done!');
});
tellMeWhenDone(function(){
    console.log('All done...');
});


//Section 4 Lecture 50 - call(), apply(), and bind()
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};
var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');

};

var logPersonName = logName.bind(person);
logPersonName('en');
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
}).apply(person, ['es', 'en']);
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));





