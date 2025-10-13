let arr=[1,2,3,4,5]
const [one,,three]=arr;//array destructuring
console.log(one,three); // Output: 1 3
//console.log(,) this prints 
let arr2=[1,2,3,4]
const [ones,...twos]=arr2; //rest operator
//twos is an array of remaining elements
console.log(ones)
console.log(twos);

let b=[1,2]
let n=[0,...b,3] //spread operator
console.log(n) // Output: [0, 1, 2, 3]

let obj1={x:5,y:10,z:19}
let obj2={x:15,y:20}
let c={...obj1,...obj2} //spread operator in objects
console.log(c) // Output: { x: 15, y: 20 } (obj2 properties overwrite obj1)