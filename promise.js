/* -- Promise Basic Example -- */
let somePromise = new Promise( (response, reject) => {
    setTimeout( () => {
        response("Promise work fine!");
        reject("Promise does not work!");
    }, 2500);
});

somePromise.then( (msg) => {
    console.log("Sucess: ", msg);
}, (errormsg) => {
    console.log("Error: ",errormsg);
});

/* -- Promise used within Function -- */
let asyncAdd  = ( a, b ) => {
    return new Promise( ( response, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                response(a+b);
            }
            else{
                reject("Number should be Integers");
            }
        },2500);
    });
};

/* --- Simple addition without chaining ---*/
asyncAdd(3,5).then((result) => {
    console.log("---------------");
    console.log("Simple Addition");
    console.log("---------------");
    console.log("3 + 5 = ",result);
}).catch((err) => {
    console.log(err);
});

// /* --- Chaining of Promise Method 1 --- */
// asyncAdd(5,3).then( (result) => {
//     console.log("----------------------------");
//     console.log("Chaining of Promise Method 1");
//     console.log("----------------------------");
//     console.log("5 + 3 = ",result);
//     return asyncAdd(result, 11).then( (result)=> {
//         console.log("Result + 11 = ",result);
//     }, (errorMsg)=> {
//         console.log(errorMsg);
//     });
// }, (error) => {
//     console.log(error);
// });

// /* --- chaining of Promise Method 2 --- */
// asyncAdd(3,5).then( (result) => {
//     console.log("----------------------------");
//     console.log("Chaining of Promise Method 2");
//     console.log("----------------------------");
//     console.log("5 + 3 = ",result);
//     return asyncAdd(result, 11);
// }, (error) => {
//     console.log(error);
// }).then( (finalResult) => {
//     console.log("Result + 11 = ",finalResult);
// }, (errorMsg) => {
//     console.log(errorMsg);
// });

/* --- chaining of Promise Method 3 --- */
asyncAdd(3,5).then( (result) => {
    console.log("5 + 3 = ",result);
    return asyncAdd(result, 11);
}).then( (finalResult) => {
    console.log("Result + 11 = ",finalResult);
}).catch((errorMsg) => {
    console.log(errorMsg);
});