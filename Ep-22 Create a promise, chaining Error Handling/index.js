const cart = ["shoes", "pants", "shirt"];

// Callback Hell
createOrder(cart, function (orderId){ // orderId
    proceedToPayment(orderId, function (paymentInfo){
        showPaymentSummary(paymentInfo);
    });
});

// Promise
createOrder(cart) // {data : undefined}
.then(function (orderId){
    console.log(orderId);
    return orderId;
}) // {data : order}
.catch(function (err){
    console.log(err.message);
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
})
.then(function (){
    console.log("No matter what happed, I will definitely be called");
})

// Create a own promise : Producer end
function createOrder(cart){

    const pr = new Promise(function (resolve, reject){
        // createOrder
        // validateCart
        // ordereId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for create order
        const orderId = "1234";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successfull");
    })
}
function validateCart(cart){
    // Resolve the promise
    return true;

    // Reject the promise
    // return false;
}

// HomeWork
// createOrder, 
// proceedToPayment,
// showOrderSummary, 
// updateWalletBalance

