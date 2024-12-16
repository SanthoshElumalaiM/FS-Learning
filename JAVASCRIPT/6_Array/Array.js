//! How to declare Array

let arr=[20,'sant',false,[4,5]]
console.log(arr);

//! How to know the length of the arr
console.log(arr.length);

//! Methods in Array

//1.push()
//*it is used to add the element at the end of the array
//* it's return modified  length of the array
let b=arr.push(4)
console.log(b);
console.log("After adding the element:"+arr);

//2.pop()
//* it will remove the element  from the end
//* it  will returns removed element

let c=arr.pop()
console.log(c);
console.log(arr);

//3.unshift
//* This method is used to add the element at  the startig of the arrar.
//* it will return the modified of the length.
let d=arr.unshift(1)
console.log(d);
console.log(arr);
//4.shift
//* This method is used to remove the element from the starting of the array.
//* it will return removed element.


let e=arr.shift()
console.log(e);
console.log(arr);

//5.include()
//* it will check whethe the given element is present or not,if the element is present it will give true otherwise it will give false
console.log(arr.includes(1));//false
console.log(arr.includes(20));//true

//6.indexOf()

//* it is used to give the index of the specified element
//* if the element is not present the it will give -1.

console.log(arr.indexOf(20));
console.log(arr.indexOf(30));
//7.canact()

//* This method is used to combined two or more than two string and it will return one new array.
let arr1=["hi am santhosh"]
let arr2=["How are you"]
let combiner=arr1.concat(arr2)
console.log(combiner);

// 8.reverse()
//* reverse method is used to reverse the array the given array.
//* it will modify the orginal array.
let reversed=combiner.reverse()
console.log(reversed);

console.log(combiner);//shallow copy

//9.join()






