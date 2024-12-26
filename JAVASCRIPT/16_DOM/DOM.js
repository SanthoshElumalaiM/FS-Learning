
//! 1)i.How to target element by the id
let p1=document.getElementById("p1")
console.log(p1);

let h1=document.getElementById("heading1")
console.log(h1);

//! ii.How to target the element by the class

let cons=document.getElementsByClassName("container")
console.log(cons);
console.log(cons[1]);

//! iii.How to target element by selector

let para=document.querySelector("#p1")
console.log(para);

let container=document.querySelector(".container")
console.log(container);


//!2 How to kmow the what is present inside the any elemnt

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

//!3.How to apply css from the JavaScript

 con7.style.backgroundColor="pink"
 con7.style.color="white"
 con7.style.border="3px solid black"
 


//! 4.how to add and remove class



let con8=document.querySelector(".con8")
console.log(con8.classList);
//*add
con8.classList.add("hello")
console.log(con8.classList);
//*remove
con8.classList.remove("con")
console.log(con8.classList);

//!5.How to create element

let heading1=document.createElement("h1")
heading1.innerText="am heading from js file"
// h1.style.color="red"
heading1.classList.add("heading1")

let con=document.querySelector(".container")
// con.after(heading1)
// con.before(heading1)
// con.append(heading1)
con.prepend(heading1)