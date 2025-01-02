let now=new Date()
console.log(now);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getDate());


let myName="sant"
console.log(`My name is ${myName}`);

var ml = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let month=now.getMonth()
let day=now.getDay()
let date=now.getDate()
console.log(date);


console.log(`today is ${ml[month]} and today is ${weekday[day]}`);

let getTime=()=>{
    let now=new Date()
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    
    hours=hours<10 ? "0" +hours:hours
    minutes=minutes<10 ? "0" +minutes:minutes
    seconds=seconds<10 ? "0" +seconds:seconds
    var Time =hours+":"+minutes+":"+seconds
   let h2=document.getElementById("time").innerHTML=Time
    // console.log( `${hours}:${mins}:${sec}`);
    
}
setInterval(getTime,1000)
getTime()

//! Math Object
console.log(Math.min(3,10));
console.log(Math.max(3,10));
console.log(Math.sqrt(16));

console.log(Math.floor(4.7));
console.log(Math.ceil(4.5));
console.log(Math.round(4.5));




