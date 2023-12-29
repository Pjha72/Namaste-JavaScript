// What is block?
// A block in JavaScript is a piece of code grouped together with curly braces { }.
// Example : 
{
    // Compund Statement
    var a = 10;
    console.log(a);
}
// What is block scope?
// A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
// let and const are block scoped

// What is shadowing?
// Shadowing is the process by which a local variable shares the same name with one of the variables in the outer scope. In such case, the local variable will take precedence over the outer variable.
var a = 100;
let b = 100;
const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30 
}
console.log(a); // 10
console.log(b); // 100
console.log(c); // 100

// function
var k = 100;
function x(){
    var p = 10;
    console.log(window.p);
    window.k = 20;
}
x();
console.log(k); // 20

// first way
var a = 10;
{
    let a = 20; // shadowing
}

// second way
let a = 10;
{
    var a = 20; // shadowing but gives error
}

// third way
let a = 10;
function x(){
    var a = 20; // shadowing and not give any error
}
x();

// fourth way
const a = 20;
{
    const a = 10; // shadowing
    {
        const a = 30; // shadowing
        console.log(a); // 30
    }
    console.log(a); // 10
}
console.log(a); // 20