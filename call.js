// call(), apply() and, bind() methods.


// Call()
// It’s a predefined method in javascript.
// This method invokes a method (function) by specifying the owner object.


function sayHello(){
    return console.log(`Hello ${this.name}`)
}

var object = {name:"Asadulloh"};

sayHello.call(object)


var person = {
    age: 23,
    getAge: function(){
        return console.log(this.age)
    }
}
var person2 = {age: 54};
person.getAge.call(person2);


function saySomething(message){
    return console.log(this.name + " is "  + message);
}
var person3 = {name:"Asadbek"}
saySomething.call(person3,  "Wonderful");


// apply()
/*The apply method is similar to the call() method. The only difference is that,
call() method takes arguments separately whereas, apply() method takes
arguments as an array.
*/

function tellSomething(message){
    return console.log(this.name + " is " + message)
}

var person4 = {name: "Tom"};
tellSomething.apply(person4, ['crazy'])