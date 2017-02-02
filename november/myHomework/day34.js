/**
 * Created by Alex on 12/8/2016.
 */
//Section 6 Lecture 62 - Dangerous Aside: Arrays and for..in
Array.prototype.myCustomerFeature ='cool';

var arr = ['john'. 'jane', 'jim'];

for (var prop in arr){
    console.log(prop + ':' + arr[prop]);
}

//Section 6 Lecture 63 - Object.create and Pure Prototypal Inheritance
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation'
                + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);


//Section 6 Lecture 64 - ES6 and Classes
//No code to follow

//Section 7 Lecture 65 - Initialization
var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]

console.log(people);

//Section 7 Lecture 66 - 'typeof' , 'instanceof', and Figuring Out What Something Is
var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);



//Section 7 Lecture 67 - Strict Mode
function logNewPerson() {
    "use strict";

    var person2;
    persom2 = {};
    console.log(persom2);
}

var person;
persom = {};
console.log(persom);
logNewPerson();

//Section 7 Lecture 68 - Strict Mode Reference
//No code to follow