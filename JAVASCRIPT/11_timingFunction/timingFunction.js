//!SetTimeOut()
//? syntax: setTimeout(callBackFunction,time);
//* it is used to excute the function after the specific time.

let hello=()=>{
    console.log("hello...");
    
}
// setTimeout(hello,2000)

// setTimeout(()=>{
//     console.log("i am setTimeOut");
    
// },3000)


let sorry=()=>{
    console.log("i am very sorry");
    
}

// setInterval(sorry,1000);

// setInterval(()=>{
//     console.log("am setTimeInterval");
    
// },2000)
//! clearTimeout()
let clearSet=setTimeout(()=>{
    console.log("am setTimeOut");
    
},3000)
// clearTimeout(clearSet)
setTimeout(() => {
    clearTimeout(clearSet)
},2000 );
//! clearInternal()
let interval=setInterval(()=>{
    console.log("am set interval");
    
},1000)

// clearInterval(interval)
setTimeout(() => {
    clearInterval(interval)
}, 5000);