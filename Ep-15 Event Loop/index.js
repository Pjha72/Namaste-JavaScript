// Q1 : What is Event Loop?
// Ans : Event Loop is a process which looks into 
// the call stack and callback queue.

// Web APIs : setTimeout, DOM, Console, fetch, etc
// setTimeout  : Is not a part of javascript, 
// it is a part of browser API (Web API)
// Console : Is not a part of javascript,
// it is a part of browser API (Web API)

// Example 1 : setTimeout
console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

// Example 2 : DOM APIs
console.log("Start");
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("Callback");
});
console.log("End");

// Example 3 : fetch
console.log("Start");
setTimeout(function cb(){
    console.log("Callback setTimeout");
},5000);

fetch("https://api.netflix.com")
.thgen(function cbF(){
    console.log("CB Netflix");
});
console.log("End");

// Microtask Queue : Promise, MutationObserver, etc

// Starvation : If there is a long running task in the call stack,
// then the callback queue will have to wait for a long
// time to get executed.
