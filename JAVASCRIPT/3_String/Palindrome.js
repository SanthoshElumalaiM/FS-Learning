let str='madam';

let res='';

function palindrome()
{

    for(let i=str.length;i>=0;i--)
        {
            res+=str.charAt(i);
        }
        if(str==res)
        {
            console.log("Palindrome");
            
        }
        
        else{
            console.log("Not palindrome");
            
        }
}
palindrome()


let res1=" "
function RemoveDup()
{
    
    
    for(i=0;i<str.length;i++)
    {
        if(!res1.includes(str.charAt(i)))
        {
           res1+=str.charAt(i);
        }
        
    }
    console.log(res1);
    
}
RemoveDup()
function binaryToDecimel(){

    let num=1010
    let sum=0;
    for(i=0,x=10;i<num.length;)
    {
        console.log(sum+=num.charat(x),x*10,x+2);
           
    }
   
        
}
binaryToDecimel()