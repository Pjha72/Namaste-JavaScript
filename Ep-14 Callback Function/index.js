// Q1 : What is a callback Function in Javascript?
// Ans : A callback function is a function that is 
// passed into another function as an argument and 
// is executed inside that function.
// Example : 
// setTimeout(function(){
//     console.log("I am a callback function");
// }, 1000);
// function x(y){
//     console.log("I am a function x");
//     y();
// }
// x(function y(){
//     console.log("I am a function y");
// });

// Javascript is a synchronous and single-threaded Language
function attachedeventlistener(){
    let cnt = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button CLicked", ++cnt);
    });
}
attachedeventlistener();


// Blocking the main thread

// Power of Callbacks?

// Deep about Event Listeners

// Closures Demo with Event Listeners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListener
// Ans : Garbage collection is the process of
// automatically freeing memory on the heap by
// deleting objects that are no longer reachable
// in your program. In JavaScript, the most
// common way that this occurs is by removing
// references to object.

// Event Listener
// Ans : An event listener is a procedure or
// function in a computer program that waits
// for an event to occur. Examples of an
// event are the user clicking or moving the
// mouse, pressing a key on the keyboard,
// disk I/O, network activity, or an internal
// timer or interrupt. The listener is in
// effect a loop that is programmed to react
// to an input or signal. The event itself
// is a signal that is generated by the
// operating system or by a program that
// decides that the event is worth announcing.
// The event listener waits for the event and
// then reacts to it in an appropriate manner.