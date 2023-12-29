
// Hoisting
// getName();
// console.log(x);
// Output
// Hello World
// undefined

console.log(getName);

var x = 7;
function getName(){
    console.log("Hello World");
}

// It behaves just like a variables
var getName2 = () =>{
    console.log("Hello World");
}
// It behaves just like a variables
var getName2 = function(){
    console.log("Hello World");
}

// Call the function
// Output : Hello World, 7
// getName();
// console.log(x);

console.log(getName);