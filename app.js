
////callback << Promise chain <<async/await. //////

//////Callback Hell////nested callbacks as a pyramid structure///

// getData(1, ()=>{
//    console.log("getting data2....");
//    getData(2, ()=>{
//     console.log("getting data3....");
//     getData(3, ()=>{
//         console.log("getting data4....");
//         getData(4);
//     })
//    })
// })



////////////PROMISE///////////////////

//Promise is an object to use to handle asyncronus task in javaScript. 
//it has three state 1:-pending, 2:-fullfilled, 3:-rejected.
//it is sollution to callback Hell.
// It accept to callBack function. 

//A javaScript Promise object can be:
// 1:-Pending: the result is undefined
// 2:-Resolved: the result is a fulfilled
// 3:-Rejected: the result is an error object



/////////////How to create a promise////////////////

// let promise = new Promise((resolve, reject) => {
// console.log("I am a Promise");
// reject("some error occured");
// })


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

/////////////How to use Promises////////////
//////Promise Methods///.then() & .catch()//////

///promise.then((res) => {...})
///promise.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//          resolve("success");
//          reject("network error");
//     })
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err)
// });

///Promise chaining////It is use to handle multiple asyncronus task///

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//          console.log("data1")
//          resolve("success");
//         }, 4000);
//     })
// }


// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//          console.log("data2")
//          resolve("success");
//         }, 4000);
//     })
// }

// console.log("fetching deta1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {})
// })

///////Example///////promise chain////

// function getData(dataId) {
//         return new Promise((resolve, reject) =>{
//             setTimeout(()=>{
//                 console.log("data", dataId);
//                 resolve("success");
                
//             }, 2000);
//         });
//     }

//     let p1 = getData(1);
//     p1.then((res)=>{
//         console.log(res);
//         let p2 = getData(2);
//         p2.then((res)=>{
//             console.log(res);
//             let p3 = getData(3);
//             p3.then((res)=>{
//                 console.log(res)
//             })
//         })
//     })


///async await////
//async await is a keyword of javaScript who made to easy to asyncronus progaramme///
//await pauses the execution of its surrounding async function until the promise is settled.///
// async function myFunc(){...}


// function getData(dataId) {
//         return new Promise((resolve, reject) =>{
//             setTimeout(()=>{
//                 console.log("data", dataId);
//                 resolve("success");
                
//             }, 2000);
//         });
//     }

//     async function getAllData() {
//         console.log("getting data1...")
//         await getData(1);
//         console.log("getting data2...")
//         await getData(2);
//         console.log("getting data3...")
//         await getData(3);
//     }


    ////whenever we use assync await it use function and it will not executed whenever we can not call the function name///
    ///to run automatic our function we use IIFE function///
    //IIFE :- it is a function that is called immediately as soon as it is defined///
    //we can write our function without function name in a ()parenthesis and immidiate call this function()///

    function getData(dataId) {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                console.log("data", dataId);
                resolve("success");
                
            }, 2000);
        });
    }

    (async function() {
        console.log("getting data1...")
        await getData(1);
        console.log("getting data2...")
        await getData(2);
        console.log("getting data3...")
        await getData(3);
    })();
