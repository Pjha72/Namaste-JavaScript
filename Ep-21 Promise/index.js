// Promise : Promise is an object that may produce a 
// single value some time in the future : 
// either a resolved value or a reason that it's not 
// resolved (e.g., a network error occurred). 
// A promise may be in one of 3 possible 
// states: fulfilled, rejected, or pending. 
// Promise users can attach callbacks to handle the fulfilled
//  value or the reason for rejection.
// console.log("Start Promise");

const cart = ["shoes", "laptop", "mobile"];


api.createOrder(cart, function (orderId){

    api.proceedToPayment(orderId, function (paymentInfo){
        
        showOrderSummary(paymentInfo, function(){

            updateWalletBalance();

        });

    });
}); // orderId






// Promise Code
// const promise = createOrder(cart);

// promise is a empty object with some data value in it with
// {data: undefined}

// promise.then(function (orderId){
//     api.proceedToPayment(orderId);
// });
// {data: orderDetails}

const API = "https://catfact.ninja/fact";
const user = fetch(API);
console.log(user);

user.then(function (data){
    console.log(data);
});

// Interview Question
// What is promise?
// Ans : Promise is an object that may produce a
// single value some time in the future :
// either a resolved value or a reason that it's not
// resolved (e.g., a network error occurred).


// Promise object is a placeholder for a certain peroid of
// time until it receive a value from a asynchorouns operation.


// Promise chaining
createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (){
    return updateWalletBalance();
});
// Other way to write the code in promise chaining
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(() => updateWalletBalance());

// Why promise is important?
// Ans : Promise is important because it helps us to 
// write a clean code and avoid callback hell problem and
// it also helps us to write a asynchronous code in a
// synchronous way. It also helps us to remove the 
// inversion control problem in callback function OR nesting 
// callback function.