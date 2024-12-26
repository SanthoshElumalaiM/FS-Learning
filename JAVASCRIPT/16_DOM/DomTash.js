let getData= async()=>{
    try {
        let fetchedData= await fetch("https://fakestoreapi.com/products")
        let jsonData= await fetchedData.json()

        let items=document.querySelector(".items")
    
       jsonData.map((ele)=>{
        let li=document.createElement("li")
        li.innerText=ele.title
       items.append(li)
       })
        
    } catch (error) {
        console.log(error);
        
    }   
}
getData()
