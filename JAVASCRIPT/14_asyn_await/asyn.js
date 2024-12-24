//*it is used to resolving the fetch

let getData= async()=>{
    try {
        let fetchedData= await fetch("https://fakestoreapi.com/products")
        console.log(fetchedData);

        let jsonData= await fetchedData.json()
        console.log(jsonData);
        
    } catch (error) {
        console.log(erorr);
        
    }
    
    
    
}
getData()
    