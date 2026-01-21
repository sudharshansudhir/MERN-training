function mul(x){
    return x*2;
}

let arr=[2,3,4,5,6];
let newArr=arr.map(mul);
console.log("Map result for *2: ",newArr); // Output: [4, 6, 8, 10, 12]
let newArr2=arr.map((x)=>x*3);
console.log("Map result for *3: ",newArr2); // Output: [6, 9, 12, 15, 18]

let filteredArr=arr.filter((x)=>x>3);
console.log("Filter result for greater than 3: ",filteredArr); // Output: [4, 5, 6]

function oddoreven(x){
    return x%2===0 ? true : false;
}
let oddorevenArr=arr.filter((x)=>oddoreven(x)===true);
console.log("Filter result for Odd or even is: ",oddorevenArr); // Output: [2, 4, 6]

let arr2=[13,15,18,20,28,30]
let five=arr2.filter((x)=>x%5==0);
console.log("Filter result for 5 multiples: ",five); // Output: [15, 20, 30]


let reducedValue=arr.reduce((acc, x)=>acc+x, 0);
//the initial value is 0 and it is assumed only if the array is empty
console.log("Reduce result for total sum of arrar: ",reducedValue); // Output: 20


let array1=[1,2,3,4,5,6]

let prod=array1.reduce((prev,curr)=>{
    return prev*curr;
},1)
console.log("Result for reduce of product is : ",prod);


let temp=[1,2,3,4,5,6,7,8,9,10]

let triple=temp.map((x)=>x*3);

let even=triple.filter((x)=>x%2==0);

let sums=even.reduce((prev,curr)=>{
    return prev+curr
},0)

console.log("Final Answer is: ",sums);
