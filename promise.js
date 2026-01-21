// const promise=new Promise((resolve,reject)=>{
//     // some async operation
//     setTimeout(()=>{
//         const success=true;
//         if(success){
//             resolve("Operation was successful!");
//         }
//         else{
//             reject("Operation failed!");
//         }   
//     },1000);
// });
// console.log("Before promise resolution");

// promise.then((message)=>{
//     console.log("Success: ",message);
// }).catch((error)=>{
//     console.log("Error: ",error);
// })
// .finally(()=>{
//     console.log("Promise has been settled (either resolved or rejected).");
// });

// console.log("After Promise resolution")


fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    //   .then(data =>console.log(data))
       .then(data => data.map((data,index)=>{
        if(index==0){
        var names=data.name
        console.log("The User at",index+1,"is",data.name,"is the hero of this story.")}
        else if(index%2==0){
            console.log(data.name,"-one of a villain kicks the hero")
        }
        else{
            console.log(data.name,"saves hero from villains ")
        }
    }))
      .catch(err=>console.log(err))
      .finally(()=>console.log("Executed successfully"))