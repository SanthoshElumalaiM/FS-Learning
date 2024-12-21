//* it is used to fetching any api data
//* it is returning promise
//* By using .then and .catch 
//* it is not giving original data.it give only respose
let fectchedData=fetch("https://fakestoreapi.com/products")
console.log(fectchedData);

fectchedData.then((data)=>{
    // console.log(data);//* return response87
    let jsonData=data.json()
    // console.log(jsonData);//* return promise
    jsonData.then((fd)=>{
        console.log(fd);
        
    }).catch((fd1)=>{
        console.log(fd1);
        
    })
        
}).catch((err)=>{
    console.log(err);

})