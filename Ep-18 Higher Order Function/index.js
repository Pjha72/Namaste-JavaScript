// Higher Order Function : A function which takes 
// another function as an argument or returns a 
// function as a result is called higher order function.

//  Example 1 : Function as an argument
// function x(){
//     console.log("I am function x");
// }

// function y(x){
//     x();
// }

const radius = [3, 1, 2, 4];

const area = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(area(radius));

const circumference = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(circumference(radius));

const diameter = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(diameter(radius));

//  DRY Principle : Don't Repeat Yourself
const Area = function (radius){
    return Math.PI*radius*radius;
};

const calculate = function (radius, logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}