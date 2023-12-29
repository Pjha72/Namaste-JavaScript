// Q1 : What is Anonymous Function?
// Ans : A function without a name is known as Anonymous Function.
// Example :
      // function (){
      //   console.log("Hello World!");
      // }
      // SyntaxError: Function statements require a function name

        // Solution :
        var add = function (){
          console.log("Hello World!");
        }
// Q2 : What is First Class Function?
// Ans : A function which is treated as a variable is known as First Class Function.
var b = function (param1){
    return function (){

    }
}

console.log(b());   // [Function (anonymous)]
// First CLass Citizen : A programming language is said to have First Class Function if it treats functions as First Class Citizen.


// Q3 : What is Difference between Function Statement Vs
// Function Expression Vs Function Declaration?
// Ans : Function Statement aka Function Declarartion: function add() {}
// Main Difference between Function Statement Vs Function Expression is Hoisting.

// Example : 
        a(); // A Called!
        b(); // TypeError: b is not a function
       function a(){
        console.log("A Called!");
       }
       // a(); // A Called!
// Function Expression : var add = function() {};
// Example : 
       var b = function(){
        console.log("B Called!");
       }
       // b(); // B Called!
// Function Declaration : function add() {}
// Example :
         function c(){
            console.log("C Called!");
         }
// Q4 : What is Named Function Expression?
// Ans : var add = function add() {};
// Example :
        var add = function xyz() {
          console.log("Add Called!");
        }
        add(); // Add Called!
        xyz(); // ReferenceError: xyz is not defined


// Q5 : What is Difference Between Parameters Vs Arguments?
// Ans : Parameters : function add(a, b) {}
var b = function add(param1, param2){
    console.log(param1 + param2);
}
// Arguments : add(1, 2);
b(1,2); // 3


// Q6 : What is Arrow Function?
// Ans : var add = (a, b) => a + b;

