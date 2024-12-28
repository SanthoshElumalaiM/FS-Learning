

let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    let con1=document.querySelector(".container1").innerHTML

    let con2=document.querySelector(".container2")
    con2.innerHTML=con1
})

let div=document.createElement("div")
div.classList.add("con3")
let con2=document.querySelector(".container2")
con2.after(div)
let button1=document.createElement("button")
button1.classList.toggle("btn1")
console.log(button1);

let d=document.querySelector(".con3")
console.log(d);
d.after(button1)

button1.addEventListener("click",()=>{
    d.style.backgroundColor="red"
})

let add=()=>
{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    let sum=num1+num2
    // console.log(sum);
    // let res=document.querySelector(".result")
    let table=document.querySelector("table")
    let tr=document.createElement("tr")
    tr.innerHTML=`<td>${num1}</td>
    <td>${num1}</td>
    <td>${sum}</td>`
    table.append(tr)
    

    
    
    
    // res.innerHTML=`<h1> ${sum} </h1>`;
    
    
    
}

