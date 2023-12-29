Q1 : What is Closures in JS?
Ans : A closure is a function having access to the parent scope, even after the parent function has closed.
    Closure is Combination of function and Lexical Environment.
    Lexical Environment is a function along with its lexical scope.
    Lexical Scope is a function along with its lexical environment.

Example : 
function outer(b){
    var a = 10;
    function inner(){
        console.log(a,b);
    }
    // If write the var here then it is also form a closures.
    let a = 10;
    inner();
    return inner;
}
outer();
outer()(); // 10 
var z = outer("Hello World");
console.log(z); // 10

// Nested with another function
function outest(){
    var c = 20;
    function outer(){
        var a = 10;
        function inner(){
            console.log(a,c);
        }
        return inner;
    }
    return  outer;
}
let a = 100;
outest()()(); // 10 20

Q2 : Advantages of Closures?
Ans : 1. Data Hiding / Encapsulation
      2. Module Design Pattern
      3. Currying
      4. Function Factory
      5. Memoization

Q3 : Example of Data Hiding / Encapsulation?
Ans : function Counter(){
    var count = 0;
    function incrementCounter(){
        count++;
    }
}
console.log(count); // ReferenceError: count is not defined

// Good and scable approach
function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.incrementCounter(); // 3
counter1.decrementCounter(); // 2

Q4 : Disadvantages of Closures?
Ans : 1. Memory Leak
      2. Encourage to use global variable
      3. Performance Issue

Q5 : What is Garbage Collection?
Ans : Garbage Collection is a process of automatically finding and 
freeing the memory that is no longer referenced by the 
application.

Q6 : How Garbage Collection and Closures are related?
Ans : Garbage Collection is a process of automatically 
finding and freeing the memory that is no longer 
referenced by the application.

Closures are the combination of function and lexical 
environment. Lexical Environment is a function along
with its lexical scope. Lexical Scope is a function
along with its lexical environment.