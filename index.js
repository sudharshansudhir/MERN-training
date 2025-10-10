console.log("Hello World")
console.log("Hello",5+2)
console.log(`5+2 =${5+2}`)

var a=10;
let b=20;
const c=30; 
a=40;
b=50;
// c=60; //error                
console.log(a,b,c);

function add(x,y){
    return x+y;
}   
console.log(add(5,10));
console.log(add(5,"10"));
console.log(add("5","10"));
console.log(add(5));
console.log(add());
console.log(add(5,10,15,20));

function add2(x=0,y=0){
    return x+y;
}

console.log(d)
var d=100; //let and const will give error
console.log(add2(5));
console.log(add2());
console.log(add2(5,10,15,20));