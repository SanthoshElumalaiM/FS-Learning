//! How to declare Object
let ob={
    name:"Pen",
    price:20,
    color:["red","blue","white"],
    do:()=>{
        console.log("i can write");
        
    }
}

//! how to access the object
console.log(ob.name);
console.log(ob.price);
console.log(ob["color"]);

ob.do()

