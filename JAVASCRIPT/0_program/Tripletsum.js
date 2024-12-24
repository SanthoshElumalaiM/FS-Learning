
let arr1=[1,4,45,6,10,8]
let target=10

// for (let i = 0; i < arr.length; i++) {
   
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i]+arr[j]==target)
//             console.log("("+arr[i]+","+arr[j]+")"+"target reached");
        
//     }
    
// }

let arr =arr1.sort((a,b)=>{return a-b;})
console.log(arr);

let i=0
let j=arr.length-1
while(i<j)
{
    if(arr[i]+arr[j]==target)
    {
        console.log("("+arr[i]+","+arr[j]+") :"+"target reached");
        
        break
        
    }
    else if(arr[i]+arr[j]>target)
    {
        j--;
    }
    else
    {
        i++;
    }
}