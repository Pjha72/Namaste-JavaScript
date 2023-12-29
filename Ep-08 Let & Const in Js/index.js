// Let and const declarations are Hoisted
console.log(b); // undefined
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10
var b = 100;

// temporal Dead Zone : it is a time since when the let variable was hoisted
// to the time when it was initialized

// ReferenceError : Cannot access 'a' before initialization
window.a; // undefined
window.b; // 100
this.a; // undefined

// let and const are not added to the window object
// var is added to the window object
// let and const are not added to the global object
// var is added to the global object

// Duplicate declaration of let and const is not allowed
// Duplicate declaration of var is allowed
//let a = 5;
//let a = 10; // SyntaxError: Identifier 'a' has already been declared

const b = 1000;
const b = 10; // SyntaxError: Identifier 'b' has already been declared

const c;
c=10; // SyntaxError: Missing initializer in const declaration

// Type Error
const d = 10;
d=100; // TypeError: Assignment to constant variable.
