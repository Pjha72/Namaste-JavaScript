console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 0);

console.log("End");

// million line of code
// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }
console.log("While loop finished");