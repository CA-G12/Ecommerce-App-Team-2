function addToList(product){
    list =  JSON.parse(localStorage.getItem("listOfProduct"));
    list.push(product);
}