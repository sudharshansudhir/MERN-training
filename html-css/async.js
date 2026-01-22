async function fetchuser() {
    try{
        const data=await fetch("https://jsonplaceholder.typicode.com/users")
        const result=await data.json()
        console.log(result[0])
    }
    catch(e){
        console.log(e)
    }
    
}

fetchuser()

