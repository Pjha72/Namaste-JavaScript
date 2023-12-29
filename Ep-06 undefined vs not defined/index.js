// console.log(a); // Undefined
// var a = 7;

// console.log(x); // Not defined

// Other Way
var b;
console.log(b); // undefined
b=10;

if(b === undefined){
    console.log("b is undefined");
}
else{
    console.log("b is not undefined");
}

// Javascript is a loosly(Weakly) typed language
var c;
console.log(c); // undefined
c = 10;
console.log(c); // 10
c = "Hello";
console.log(c); // Hello

// bad practice
a = undefined;
