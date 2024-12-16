
let arr1=[2,9,12,18]
let arr2=[3,5,11,20]

let n1=arr1.length
let n2=arr2.length

// for(i=0;i<res.length;i++)
// {
//     for(j=0;j<res.length;j++)
//     if(arr1[i]>arr2[j])
//     {
//         res+=arr1[i]
//     }
// }
// console.log(res);
let i=0,j=0
let arr3=[]
while(i<=n1 && j<=n2)
{
    if(arr1[i]<arr2[j])
    {
        arr3.push(arr1[i])
        i++
    }
    else{
        arr3.push(arr2[j])
        j++
    }
}
console.log(arr3);


