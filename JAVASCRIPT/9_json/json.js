
//! Defintion

//* JSON (JavaScript Object Notation ) is a lightWeigtht  data-interchange format
//* That is easy for human to read and write ,and easy for machine  to parse and generate

//! Advantanges of jSON:
//? Huma-Readable:
//* Json's Structure is easy for developer to understand read and write
//? LightWeigtht:
//* JSON is a minimal format that reduces the size of the data being transmitted.
//? Language-Independent
//* JSON can be used with many programming language.
//* including javaScript,python,ruby,java,etc.
let ob={
    name:"sant",
    age:45,
    skils:["java","html","sql"],
    address:{
        city:"chennai",
        pin:99899
    }
}

console.log(ob);
//! Stringify()
//* Stringify()is used to convert javaScript object into  JSON format
let jsonData=JSON.stringify(ob)
console.log(jsonData);
//!parse()
console.log( typeof jsonData);
//*parse() is used to convert json into javaScript Object 
let ob1=JSON.parse(jsonData)
console.log(ob1);


