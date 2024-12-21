let p=new Promise((reslove,reject)=>{
    // reslove("i will take ")
    reject("i will not do")
})
console.log(p);

// p.then((data)=>{
//     console.log(data);
    
// })
p.catch((err)=>{
    console.log(err);
    
})
.finally(
    console.log("Promise is running")
    
)
