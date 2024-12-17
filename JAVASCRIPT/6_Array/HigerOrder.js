//! higher order array methods
let arr=[10,20,30,40,50]
//! forEach
//* it can take three parameter > element,index,array
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
