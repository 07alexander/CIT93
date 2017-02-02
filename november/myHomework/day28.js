/**
 * Created by Alex on 11/17/2016.
 */
//Homework Day 28

//Section 4 Lecture 51 - Functional Programming 
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);
var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});

console.log(arr2);
var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});

console.log(arr3);
var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);



//Section 4 Lecture 52 - Functional Programming - Part 2

// underscore.js must be included to use underscore object
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);



//Section 5 Lecture 53 - Conceptual Aside: Classical vs Prototypal Inheritance
//No Code to follow along


//Section 5 Lecture 54 - Understanding the Prototype
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);
var jane = {
    firstname: 'Jane'   
}

jane.__proto__ = person;
console.log(jane.getFullName());
person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());


//Section 5 Lecture 55 - Everything is an Object (or a primitive)
var a = {}
var b = function (){};
var c = [];


//Section 5 Lecture 56 - Reflection and Extend
//underscore.js needs to be included to use underscore object
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}
_.extend(john, jane, jim);
console.log(john);






