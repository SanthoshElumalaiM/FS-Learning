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

//! print object

console.log(ob);

//!how to modify the element

ob.price=30
console.log(ob.price);

//! how to addd new property

ob.brand="sant"
console.log(ob);

//! hoe to delete the element

delete ob.brand
console.log(ob);

//! how to add array element inside object
ob.color.push("yellow")
console.log(ob.color);

//! how to call function from object
ob.do()
// console.log(ob.do);

//! Object Methods

let student={
    sname:"abc",
    age:18,
    skills:["java","html","css"],
    address:{
        city:"chennai",
        pin:98765

    }

}

console.log(student.address.city);

//! Object.keys()

//* it will return array where all the keys will be  stored as arrat element 
let keys=Object.keys(student)
console.log(keys);

let keys1=Object.keys(student.address)
console.log(keys1);

//! Object.value()
//* it will return an array where all the values will be stored as array element
let value=Object.values(student)
console.log(value);







