console.log(`hello world ${4+5}`)

const sum=(a,b)=>{return a+b}

console.log(`The Arrow Function -> ${sum(9,99)}`)
console.log("5"-2)
console.log(Number("bob")) //NaN

console.log(true+1)
console.log(5+undefined) //NaN

var a="a"
console.log(a)
var a=5
console.log(a)

const arr=[4,5,6,7]
console.log(arr.map((i)=>i+3))
console.log(arr)

console.log(arr.find((a)=>a<5))  //return only first
console.log(arr.filter((a)=>a<=5)) //return all possible values

async function fetchApi() {
    try{
        const data=await fetch("http://localhost:7000/user/all")
        // console.log(data)
        const dataa=await data.json()
        console.log(dataa)
    }
    catch(e){

    }
    
}

fetchApi() 