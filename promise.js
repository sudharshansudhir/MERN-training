const promise=new Promise((resolve,reject)=>{
    // some async operation
    setTimeout(()=>{
        const success=false;
        if(success){
            resolve("Operation was successful!");
        }
        else{
            reject("Operation failed!");
        }   
    },2000);
});

promise.then((message)=>{
    console.log("Success: ",message);
}).catch((error)=>{
    console.log("Error: ",error);
})
.finally(()=>{
    console.log("Promise has been settled (either resolved or rejected).");
});