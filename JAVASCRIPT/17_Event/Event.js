
let hello=()=>{
    alert("Hello")
}
// hello()
let add=()=>{
    let a=10
    let b=20
    alert(a+b);
}

let  mouseOver=()=>{
    alert("am onMouse");
    
}
let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",()=>{
    alert("am event Listener");
    
})
