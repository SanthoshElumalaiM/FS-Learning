
//! 1.How to target element by the id
let p1=document.getElementById("p1")
console.log(p1);

let h1=document.getElementById("heading1")
console.log(h1);

//! 2.How to target the element by the class

let cons=document.getElementsByClassName("container")
console.log(cons);
console.log(cons[1]);

//! 3.How to target element by selector

let para=document.querySelector("#p1")
console.log(para);

let container=document.querySelector(".container")
console.log(container);


//! How to kmow the what is present inside the any elemnt

let con3=document.querySelector(".container3")

console.log(con3);

let TextInside=con3.innerText
console.log(TextInside);

let InnerHtml=con3.innerHTML
console.log(InnerHtml);


let unorderedList=document.querySelector(".unOrderedList")
console.log(unorderedList);
 let Ul=unorderedList.innerText
 console.log(Ul);

 let Ul1=unorderedList.innerHTML
 console.log(Ul1);

 unorderedList.innerText="Hello How are You"

 unorderedList.innerHTML="<h1>This is container1</h1><p>Lorem ipsum dolor sit amet.</p>"
 
 
//! how to copy from one div to another div
 let con6=document.querySelector(".container").innerHTML


let con7=document.querySelector(".container5")
console.log(con7);

con7.innerHTML=con6


 
 




