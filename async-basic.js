console.log("Application is starting");

setTimeout( () => {
    console.log('3 Second is finished');
},3000);

setTimeout( () => {
    console.log('Call Back function called');
},0);


console.log('Application is Finished');