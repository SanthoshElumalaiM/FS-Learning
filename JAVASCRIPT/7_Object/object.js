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

//* it will return array where all the keys will be  stored as array element 
let keys=Object.keys(student)
console.log(keys);

let keys1=Object.keys(student.address)
console.log(keys1);

//! Object.value()
//* it will return an array where all the values will be stored as array element
let value=Object.values(student)
console.log(value);

//! Object.entries()
//* it will return one array there all the key and value pairs will be stored in each array.
let entries=Object.entries(student)
console.log(entries);

//! Object.freeze()

//* This method  will freeze the object means we can't
console.log(student);

Object.freeze(student)

student.phno=98766653456 //not possible
console.log(student);
delete student.age
console.log(student); //not possible


//! 5.Object.isFrozen()
//* it is used to check whether the object is frozen or not.if it isfrozen it wil give true otherwise it will return false.

console.log(Object.isFrozen(student));


//! 6.Object.seal()

//* it is also simlar to object.freeze() method but here we can modify the property of the object.
//* we cannot dele or add any element
let student1={
    sname:"abc",
    age:18,
    skills:["java","html","css"],
    address:{
        city:"bangalore",
        pin:98765

    }

}
Object.seal(student1)
console.log(student1);
delete student1.age
console.log(student1);
student1.phono=90909
console.log(student1);

student1.sname="sant"
console.log(student1);

//! 7.Object.issealed()

// * it is used to know the whether the object is sealed or not
console.log(Object.isSealed(student1));

//! 8. Object.assign()
//* it is used combine two or more than object and it return the new object.
let ob1={
    name:"ob1",
    age:10
}
let ob2={
    city:"chennai",
    pin:890
}

let combinedOb=Object.assign({},ob1,ob2)
console.log(combinedOb);

//!9.hasOwnProperty()
//* it is used to check the given preperty is present or not
console.log(ob1.hasOwnProperty("name"));






