function mul(x){
    return x*2;
}

let arr=[2,3,4,5,6];
let newArr=arr.map(mul);
console.log(newArr); // Output: [4, 6, 8, 10, 12]
let newArr2=arr.map((x)=>x*3);
console.log(newArr2); // Output: [6, 9, 12, 15, 18]

let filteredArr=arr.filter((x)=>x>3);
console.log(filteredArr); // Output: [4, 5, 6]
let reducedValue=arr.reduce((acc, x)=>acc+x, 0);
console.log(reducedValue); // Output: 20

function oddoreven(x){
    return x%2===0 ? true : false;
}
let oddorevenArr=arr.filter((x)=>oddoreven(x)===true);
console.log(oddorevenArr); // Output: [2, 4, 6]