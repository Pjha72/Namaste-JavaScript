const cart = ["shoes", "pants", "shirts"];

// promise

createOrder(cart)
.then(function (orderId){
    console.log(orderId);
    return orderId;
})
.catch(function (err){
    console.log(err.message);
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function ({msg, amount}){
    console.log(msg, 'of amount: ', amount);
    return showOrderSummary(msg, amount);
})
// .then(function ({msg, amount}){
//     console.log("Debit the amount: ", amount-3000);
// })
.then(function({msg,amount}){
    console.log(msg, "of amount: ", amount);
    return updateWalletBalance(msg,amount);
})
.then(function ({msg, amount}){
    console.log(msg, "Remaining balance: ", amount);
})

function createOrder(cart){
    const pr = new Promise(function (resolve, reject){
        // create Order
        // ValidateCart
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }

        // Logic for create order
        const orderId = "4567";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },2000);
        }
    });

    return pr;
}



function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve({msg : `Payment Successfull`, amount: 5000});
    })
}

function showOrderSummary(paymentInfo, amount){
    return new Promise(function(resolve, reject){
        console.log(amount);
        if(amount >= 2000){
            resolve({msg:"Order that item at cost : ${amount}", amount});
        }
        else{
            reject(new Error("Amount is not sufficient"));
        }
    })
}

function updateWalletBalance(msg,amount){
    return new Promise(function(resolve, reject){
        const RemainingBalance = amount - 3000;
        resolve({msg:`Wallet balance updated successfully`, amount: RemainingBalance})
    })
}

function validateCart(cart){
    // resolve the promise
    return true;

    // reject the promise
    // return false;
}