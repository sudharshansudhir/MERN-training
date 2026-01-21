// let names="Sudharshan"
// console.log(`My Name is ${names}`);

//heap stores object in the memory

//stack stores functions in the memory

//micro task-console,promise

//macro task- settimeout, setinterval, I/O, DOM

//call stack- it is a stack data structure which follows LIFO(Last In First Out) principle

//Event Loop- it is a process that monitors both the call stack and the task queue. If the call stack is empty, it takes the first task from the queue and pushes it to the call stack
//web APIs- it is a set of APIs provided by the browser to handle asynchronous operations

//execution context- it is an abstract concept that holds information about the environment within which the current code is being executed

console.log("first");
Promise.resolve().then(console.log("third"));
setTimeout(()=>{
    console.log("second");
},2000);
console.log("fourth");
