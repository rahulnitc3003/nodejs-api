let square = (x) => {
    var result = x * x;
    return result;
};
console.log("9 * 9 = ",square(9));

/* --- same thing is written as it is --- */
let square1 = (x) =>  x * x ;
console.log("9 * 9 = ",square1(9));

let user = {
    name : "Rahul Raj",
    sayHi : () => {
        console.log(arguments);
        console.log(`Hi!!! ${this.name}`);
    },
    sayHello () {
        console.log(arguments);
        console.log(`Hello!!! ${this.name}`);
    }
};

user.sayHi();
user.sayHi('Andrew','hilton','Cristh');

user.sayHello();
user.sayHello("John","Marry","Rock");