// Four types of promise api
// 1. Promise.all([p1(3sec),p2(1sec),p3(2sec)]) : for Success -> return [val1,val2,val3] 
// after 3sec get the value of all promises. 
// point-1 : Wait for all of them to finish
// Ans : Promise.all() takes an array of promises (p1,p2,p3)
// and returns a new promise that waits for all of them to finish.

// Case-2 : if any of the promises is failed
// Ex : Promise.all([p1(3sec),p2(1sec),p3(2sec)]) : after 1sec
// p2 is rejected then Promise.all() will be given the error.
// and remaining promises will be ignored.It will not wait
// for other promises to finish.

// Code :
// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P1 Success"),3000);
// });
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P2 Success"),1000);
//     // setTimeout(()=> reject("P2 Failed"),1000);
// });
// const p3 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("P3 Success"),2000);
//     setTimeout(()=> reject("P3 Failed"),2000);
// })
// Promise.all([p1,p2,p3]).then(res => {
//     console.log(res);
// }).catch(err=>{
//     console.error(err);
// });


// 2. Promise.allSettled()
// Case-1 : Promise.allSettled([p1(3sec),p2(1sec),p3(2sec)])
// After 3sec get the value of all promises. [val1,val2,val3]

// Case-2 : if any of the promises is failed
// Ex : Promise.allSettled([p1(3sec),p2(1sec),p3(2sec)]) 
// it will wait for all promises to settled. and after 3sec
// it will return the result of all promises.[v1,err2,v3]

// Code :
// const ps1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("Ps1 Success"),3000);
// });
// const ps2 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("Ps2 Success"),1000);
//     setTimeout(()=> reject("Ps2 Failed"),1000);
// });
// const ps3 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("Ps3 Success"),2000);
//     // setTimeout(()=> reject("Ps3 Failed"),2000);
// })
// Promise.allSettled([ps1,ps2,ps3]).then(res => {
//     console.log(res);
// }).catch(err=>{
//     console.error(err);
// });


// 3. Promise.race()
// Case-1 : Promise.race([p1(3sec),p2(1sec),p3(2sec)])
// after 1sec get the value of first settled promise i.e p2.
// and remaining promises will be ignored.

// Case-2 : if any of the promises is failed
// Then that promise given the error and 
// remaining promises will be ignored.

// Code :
// const pr1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("Pr1 Success"),3000);
// });
// const pr2 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("Pr2 Success"),1000);
//     setTimeout(()=> reject("Pr2 Failed"),1000);
// });
// const pr3 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("Pr3 Success"),2000);
//     setTimeout(()=> reject("Pr3 Failed"),2000);
// })
// Promise.race([pr1,pr2,pr3]).then(res => {
//     console.log(res);
// }).catch(err=>{
//     console.error(err);
// });

// 4. Promise.any()
// Case-1 : Promise.any([p1(3sec),p2(1sec),p3(2sec)])
// Wait for first resolved promise and return the value of
// that promise.[val2]

// Case-2 : if p1 is rejected
// Then it will for first resolved promise and return
// the value of that promise.[val2]

// Case-3 : if all promises are rejected
// Then it will give the error of last promise.[err3]
// give the list of all errors. i.e aggregate error.
// [err1,err2,err3] after 3sec

// Code :
const pa1 = new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("Pa1 Success"),3000);
    setTimeout(()=> reject("Pa1 Failed"),3000);
});
const pa2 = new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("Pa2 Success"),1000);
    setTimeout(()=> reject("Pa2 Failed"),1000);
});
const pa3 = new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("Pa3 Success"),2000);
    setTimeout(()=> reject("Pa3 Failed"),2000);
})
Promise.any([pa1,pa2,pa3]).then(res => {
    console.log(res);
}).catch(err=>{
    console.error(err);
    // Handle Aggregate Error
    console.log(err.errors);
});

// Lingo : 
// A promise is Settled : Got the result
// It can be either resolved or rejected.
// It cab be either fulfilled or rejected.
// It can be either Success or Failed.
