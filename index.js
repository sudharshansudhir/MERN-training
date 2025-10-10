// console.log("Hello World")
// console.log("Hello",5+2)
// console.log(`5+2 =${5+2}`)

// var a=10;
// let b=20;
// const c=30; 
// a=40;
// b=50;
// // c=60; //error                
// console.log(a,b,c);

// function add(x,y){
//     return x+y;
// }   
// console.log(add(5,10));
// console.log(add(5,"10"));
// console.log(add("5","10"));
// console.log(add(5));
// console.log(add());
// console.log(add(5,10,15,20));

// function add2(x=0,y=0){
//     return x+y;
// }

// console.log(d)
// var d=100; //let and const will give error
// console.log(add2(5));
// console.log(add2());
// console.log(add2(5,10,15,20));
// let obj1={x:10};
// let obj2=obj1;
// obj2.x=20;
// console.log(obj1.x);
// console.log(obj2.x);
// a=10;
// b=20;
// if (!(a==b)){
//     console.log("not equal")
// }

// console.log(9&5)
// console.log(9|5)
// console.log(9^5)
// console.log(~9) //find 2's complement and add negative sign
// console.log(9<<2)
// console.log(9>>2)
// console.log(9>>>2) //no negative signn 


function add(x,y){
    return x+y;
}   

console.log(add(5,10));


function add2(x,y){
    console.log(x+y);
}
add2(5,10);

// Arrow function

const add3 = (x,y)=>{
    console.log(x+y);
}   
add3(5,10);