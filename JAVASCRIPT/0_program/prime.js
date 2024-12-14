let isPrime=(num)=>{

    if(num==0||num==1)
    {
        return false
    }
    for (let i = 2; i <= num; i++) 
    {
        if(num%i==0)
        {
            return false
            break
        }
        
    }
    return true;
}

let isPrime1=(num)=>{
    let count=0
    for (let index = 1; index <= num;index++)
    {
        if(num%index==0)
        {
            count++
        }
        
    }
    if(count==2)
    {
        console.log(num +"  is prime");
        
    }
    else{
        console.log(num+ " is not a prime");
        
    }
    
}
let number=20
for (let j =1 ;j<number ;j++) 
{
    isPrime1(j)
    
}
// isPrime1(8)
if(isPrime(5))
{
    console.log("given number is prime");
    
}
else{
    console.log("given number is Not a prime");
}