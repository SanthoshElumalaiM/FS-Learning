let form=document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userName=document.getElementById("loginName").value
    let userPass=document.getElementById("loginPass").value
    console.log(userName,userPass);

    
    
   let getName=localStorage.getItem("signupName")
   let getPass=localStorage.getItem("signupPass")
   
   if(userName==getName && userPass==getPass)
   {
    alert("login successfully")
    open("./calculator/calculator.html")
   }
   else{
    alert("Please Enter Valid userName and Password")
   }
   
    


})