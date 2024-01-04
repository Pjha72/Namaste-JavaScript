/**
    * 1. What is aysnc?
      Ans: Async is a keyword which is used to make
      a function asynchronous. Async function always
        returns a promise.
    * 2. What is await?
        Ans : Await is a keyword which is used to wait
        for the promise to resolve or reject.
        -> Async & Await both combo is used to handle the
        Promise.
        -> await keyword can only be used inside the 
        async function.
    * 3. How async await works behind the scences?
        Ans : Done througn code
    * 4. Examples of using async/await
    * 5. Error handling
    * 6. Interviews
    * 7. Async await Vs Promise.then/.catch
**/

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value");
//     },20000);
// });

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved Value!!");
//     },40000);
// });

// **Create a async function : This async function will**
// **always return a promise**
// async function getData(){
//     return p;
// }

// const dataPromise = getData();
// console.log(data); // Promise { 10 }
// dataPromise.then((res) => console.log(res)); // Namasate

// **How to handle promise before using async await**
// function getData(){
//     // JS Engine will not wait for the promise to resolve
//     p.then((res) =>console.log(res));
//     console.log("Namaste");
// }

// getData();

// **Handle promise Using await with async function**
// async function handlePromise(){
//     console.log("Javascript");

//     // JS Engine was waiting for the promise to resolved
//     const data = await p;
//     console.log("Namaste");
//     console.log(data);


//     const data1 = await p1;
//     console.log("Namaste 1");
//     console.log(data1);
// }
// handlePromise();

// **What happens behind the scences**
// handlePromise() : it will suspend when it will find the await
// keyword and it will resume when the promise is resolved.
// call stack

// async - p, p1

const API_URL = "https://api.github.com/users/Pjha72";

// **Real world example of async/await**
// async function getUser(){
//     const data = await fetch(API_URL);

//     // fetch() => Response object is a readable string i.e
//     // .json() is a promise => gives a json value

//     const jsonValue = await data.json();

//     // Normal way to write
//     // fetch(API_URL).then((res) => res.json()).then(res=>console.log(res));

//     console.log(jsonValue);
// }
// getUser();

// ** How to Handle Error in async/await **
async function getUser(){
    try{
        const data = await fetch(API_URL);

        // fetch() => Response object is a readable string i.e
        // .json() is a promise => gives a json value

        const jsonValue = await data.json();

        // Normal way to write
        // fetch(API_URL).then((res) => res.json()).then(res=>console.log(res));

        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
}
getUser();
// Traditional way to handle error
// getUser().catch((err) => console.log(err));

// ** Interview Tips **
/**
 * 1. What is async/await?
 * 2. How async/await works behind the scences? 
 * **/

// ** Async await Vs Promise.then/.catch**
// ** Async await is a syntactic sugar over promise.then/.catch
// ** Async await is easy to read and write
// ** Async await is easy to debug
// ** Async await is easy to write error handling code
// ** Async await is easy to write sequential code
// ** Async await is easy to write parallel code
// ** Async await is easy to write unit test cases
