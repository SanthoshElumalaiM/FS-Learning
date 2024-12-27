

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
button1.classList.add("btn1")
console.log(button1);

let d=document.querySelector(".con3")
console.log(d);
d.after(button1)

button1.addEventListener("click",()=>{
    d.style.backgroundColor="red"
})
