console.log("Callback Start");

setTimeout(function (){
    console.log("Callback Middle");
}, 5000);

console.log("Callback End");

// Another Example
const cart = ["shoes", "pants", " kurta"];

// This is a callback hell : i.e issues of callback function
api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet();
        });
    });
});

// It is also known as Pyramid of Doom
// Callback hell is a first issues in callback function
// When writing the callback function inside a callback function
// again and agian at that time a problem is occured
// that is the code is unmaintainable and unreadable
// and code goes like a horizontal way and it is very
// difficult to understand the code. it is also konwn as
// Pyramid of Doom.

// Second Issues of Callback function is : 
// Inversion of Control : i.e we are giving control to the
//  function which we are passing as a callback function
//  to call it whenever it wants to call it.

api.createOrder(cart, function (){
    api.proceedToPayment();
});

// In the above example we are giving control to the
// createOrder function to call the payment function
// whenever it wants to call it.
// Boz i blendly trust on the createOrder function
// that it will call the payment function whenever
// it wants to call it. But what if the createOrder
// function is not calling the payment function
// at that time we are in trouble.





