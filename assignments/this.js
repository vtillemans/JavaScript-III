/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  For a function in the global scope, the value of "this" will be in the window object. 
* 2.  When a function is called by a preceeding dot, the object to the left of that dot is "this".
* 3.  In a constructor function, "this" is the object that is created and returned by the constructor function. 
* 4.  "this" is explicity defined in a call or apply method. 

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
};

greetMe('Vanessa');

// Principle 2

// code example for Implicit Binding

var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
};

greetMe.speak('Lennon');

// Principle 3

// code example for New Binding

function GreetMe(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetTaylor = new GreetMe('Taylor');
var greetNatalie = new GreetMe('Natalie');

greetTaylor.speak();
greetNatalie.speak();


// Principle 4

// code example for Explicit Binding

GreetMe.prototype.sayGoodbye = function() {
    console.log('Goodbye ' + this.name);
    console.log(this);
};

greetTaylor.sayGoodbye.call(greetNatalie);
greetNatalie.sayGoodbye.apply(greetTaylor);

