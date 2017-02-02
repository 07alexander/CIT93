//Section 6 Lecture 57 - Function Constructors, 'new', and the History of Javascript
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

//Section 6 Lecture 58 - Function Constructors and '.prototype'1
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
};

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
};

console.log(john.getFormalFullName());

//Section 6 Lecture 59 - Dangerous Aside: 'new' and functions
//No Code to follow along, follow 'new' convention

//Section 6 Lecture 60 - Conceptual Aside: Built-In Function Constructors
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
};
console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
};

//Section 6 Lecture 61 - Dangerous Aside: Built-In Function Constructors
//No code to follow along