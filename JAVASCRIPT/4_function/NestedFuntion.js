
let outerFunction=()=>{
    let a=100;
    let innerFunction=()=>{
        let b=89;
        console.log(a-b);
        
    }
    innerFunction()
}
outerFunction()