let form=document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName=document.getElementById("userName").value
    let userPass=document.getElementById("userPass").value
    // console.log(userName,userPass);

    
    localStorage.setItem("signupName",userName)
    localStorage.setItem("signupPass",userPass)
    // alert("registered suceessfully");
    open("./login/login.html")

    


})