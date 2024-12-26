
let arr1=[1,4,45,6,10,8]
let target=13;

function triplet_sum()
{
    for (let i = 0; i < arr1.length; i++) {
   
        for (let j = i+1; j < arr1.length; j++) {
            for (let k = i+2;k < arr1.length;k++) {
                if(arr1[i]+arr1[j]+arr1[k]==target)
                    console.log("("+arr1[i]+","+arr1[j]+","+arr1[k]+")"+"target reached");
                
            }
            
        }
        
    }
}
// triplet_sum()
let arr =arr1.sort((a,b)=>{return a-b;})
console.log(arr);

function triplet_sum1()
{
    let i=0
    let j=arr.length-1
    
    
    while(i<j)
    {
        
        if(arr[i]+arr[j]==target)
        {
            console.log("("+arr[i]+","+arr[j]+") :"+"target reached");
            
            
            break;
        
        }
         if(arr[i]+arr[j]>target)
        {
            j--;
        }
        if(arr[i]+arr[j]<target)
        {
            i++;
        }
    }
}
// triplet_sum1()
function triplet_sum2()
{
    let i=0
    let j=i+1
    let k=arr.length-1

    
    for(i=0;i<arr.length-2;i++)
   {    
   
        while(j<k)
        {
            
            
            if(arr[i]+arr[j]+arr[k]==target)
            {
                console.log("("+arr[i]+","+arr[j]+","+arr[k]+")"+"target reached");
                

                
                break;
            
            }
            else if(arr[i]+arr[j]+arr[k]>target)
            {
                k--;
            }
            else
            {
                j++;
            }
        }
   }
}
triplet_sum2() 