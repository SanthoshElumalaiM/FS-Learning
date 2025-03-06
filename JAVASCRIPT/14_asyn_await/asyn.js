//*it is used to resolving the fetch

let getData= async()=>{
    try {
        let fetchedData= await fetch("https://fakestoreapi.com/products")
        console.log(fetchedData);

        let jsonData= await fetchedData.json()
        console.log(jsonData);

       jsonData.map((ele)=>{
        console.log(ele.title,ele.price,ele.rating);
        
       })
        
    } catch (error) {
        console.log(error);
        
    }   
}
getData()

zx             
    