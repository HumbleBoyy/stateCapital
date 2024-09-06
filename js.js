
// Immediately invoked function
(function (){
    console.log('immadiately invoked function runs here')
})();




// High order functions in javaScript

/*
Functions that operate on other functions, either by taking them as arguments or
by returning them, are called higher-order functions.
*/

function highOrder(fn){
    fn();
}

highOrder(function(){console.log('High order function runs here!')})


function higherOrder2(){
    return function(){
        return console.log("DO something about it!")
    }
}

var x = higherOrder2();
x()



// EXPLAIN 'THIS' KEYWORD

/* 
 The “this” keyword refers to the object that the function is a property of.
The value of the “this” keyword will always depend on the object that is invoking
the function.\
*/


function doSomething(){
    console.log(this)
}

doSomething();


var obj = {
    name: 'Asadulloh',
    getName: function(){
          console.log(this.name)
    }
}

obj.getName();

var object = {
    name:"Asadulloh Abdurakhmonov",
    getName: function(){
        console.log(this.name)
    }
}

var getName = object.getName;

var object2 = {name:"Asadbek", getName};
object2.getName()