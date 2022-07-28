function addToList(product){
   let  list =  JSON.parse(localStorage.getItem("listOfProduct"));
   console.log(list)
    list.push(product);
    console.log(list)
    localStorage.setItem("listOfProduct" ,JSON.stringify(list) )
}