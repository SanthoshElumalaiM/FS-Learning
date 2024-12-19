let student=[{
    sid:1,
    sname:"sant",
    age:10,
    skills:['java','html','css'],
    address:{
        city:"chennai",
        pin:3789,
    }
},
    {
        sid:2,
        sname:"a",
        age:15,
        skills:['java','html','js'],
        address:{
            city:"banglore",
            pin:3789,
        }
    },
        {
            sid:3,
            sname:"b",
            age:10,
            skills:['java','html','sql'],
            address:{
                city:"tvmalai",
                pin:3789,
            }
        }
]

// console.log(student[0]);
student.map((stu)=>{
    console.log(stu);
    
})

student.map((stu)=>{
    console.log(stu.sname);
    
})
student.map((stu)=>{
    console.log(stu.address.city);
    
})
//! for-in loop for array
//* for-in loop it will print the index for array
//* for-in loop it will print the key for object
//* for-in loop it will print the index for string
let arr=[10,20,30,40]
for(let i in arr)
{
    // console.log(arr[i]);
    console.log(i);
    
}
//* we can use for-in loop in object also ,it will print key 
let ob={
    name:"abc",
    age:9,
    city:"chennai"

}
for(let key in ob){
    console.log(key);
    
//!
}
//! for-of loop  for array
//* for-of loop it will print element for array
//* object can't use for-of loop in object
//* for-in loop it will print the character for string
for(let ele of arr)
{
    console.log(ele);
    
}
// for(let ele of ob)
// {
//     console.log(ele);
    
// }
//! for string
let str="hello"
for(let i in str)
{
    console.log(i);
    
}
for(let ele of str)
{
    console.log(ele);
    
}
