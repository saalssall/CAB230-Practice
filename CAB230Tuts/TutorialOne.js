// Week 01 Tutorial

let f_older = 0; 
let f_old = 1;
let n = 10;

for (let i = 2; i<=10; i++){
let f_new = f_older + f_old;
console.log("F" + i + ": " + f_new);
f_older = f_old;
f_old = f_new };

console.log("----------------------");
console.log("10 numbers");
let fibonacci = function(n){

let prev = 0;
let prev1 = 1;

for (let i = 2; i<=n; i++){
let f_new = prev1 + prev;
console.log("F" + i + ": " + f_new);
prev1 = prev;
prev = f_new ;
}
};

let num = 5;
console.log(fibonacci(num));
console.log("5 numbers");
console.log("----------------------");
console.log("F" + num +": " + fibonacci(10))
console.log("10 numbers");
console.log("----------------------");
console.log("15 numbers");
console.log("F" + num +": " + fibonacci(15));
console.log("----------------------");
console.log("20 numbers");
console.log("F" + num +": " + fibonacci(20));
console.log("----------------------");
console.log("50 numbers");
console.log("F" + num +": " + fibonacci(50));
