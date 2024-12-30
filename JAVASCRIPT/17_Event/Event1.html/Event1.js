
let btn=document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click",()=>{
    console.log("am eventListener");
    
})
btn.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.target.innerText)  
    console.log("SeccondTime EventListener");
    
})

let form =document.getElementById("form")
// console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log("hello");
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    // console.log(num1,num2);
    let add=num1+num2;
    // console.log(add);
    
    let res=document.querySelector(".result")
    // console.log(res);
    res.innerHTML=`<h1>The ouput is ${add}  `
    
    
})
