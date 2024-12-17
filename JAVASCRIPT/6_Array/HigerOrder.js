//! higher order array methods
let arr=[10,20,30,40,50]
//! forEach
//* it can take three parameter > element,index,array
//* forEach can't return anything ,it is only use traversing the array
arr.forEach((ele,index,arr)=>{
console.log(ele,index,arr);

})

//! how to find the   greatest element  of the given array
let arr1=[]
arr.forEach((ele)=>{
    if(ele>30)
    {
        arr1.push(ele)
    }
    console.log(arr1);
})
//! add 100 with all the element and give the array

let add=[]
arr.forEach((ele)=>{
    add.push(ele+100)
}
)
console.log(add);

let sum=0
arr.forEach((ele)=>{
    sum+=ele
})
console.log(sum);
console.log("==========================");


//! 2.filter method
//* filter can take also three parameter
//* if we want to filter the condition we go for filter method

let filterArr=arr.filter((ele)=>{
    return ele>30
})
console.log("using filter method:"+filterArr);

//! in one line
let filterArr1=arr.filter((ele)=>ele>30)
console.log("filter in single line:"+filterArr1);

//! 3.Map 
//* it is used also traversing the array and along with if we want to any arithematic operation we can to do.
//* it can take three parameter also
let arrMap=arr.map((ele)=>{
    return ele+100
})
console.log("Using Map method:"+arrMap);

let arrMap1=arr.map((ele)=>ele+100)
console.log("Map in single line:"+arrMap1);

//! 4.reduce()
//* it can take four parameter like accumulator,element,index,array
let reduceArr=arr.reduce((acc,ele)=>{
    return acc+ele
},1000)
console.log("Using reduce method"+reduceArr);

//!5.sort()
let unsortArr=[2,5,8,0,14,3]
let asc=unsortArr.sort((a,b)=>{
    return a-b;
})
console.log(asc);

let desc=unsortArr.sort((a,b)=>{
    return b-a;
})
console.log(desc);
