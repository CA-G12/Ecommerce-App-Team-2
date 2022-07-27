


function search(list , text){
    console.log(list)
    
    list = list.filter((val,index)=>{
        console.log(text , list[index].NameCar.slice(0,text.length))
            if(text.toUpperCase() == list[index].NameCar.slice(0,text.length).toUpperCase()){
                return val
            }
    }) 
    console.log(list)
    return list;
} 

function category(list , text){ 
    list = list.filter((val,index)=>{
            if(text == list[index].category){
                return val
            }
    }) 
    return list;
} 

function price(list ,min = 0,max = Infinity){
    if(max == '' )
    max = Infinity;
    if(min == '')
    min = 0;
    list = list.filter((val,index)=>{
        if(min <= list[index].Price   && max >= list[index].Price ){
            return val
        }
}) 
return list;
}

function displyListOfProduct(list){
    customercCont.innerHTML ='';
    for(let i = 0 ; i < list.length ; i++){
        let div = document.createElement('div');
        div.classList.add('customer-content');
        div.addEventListener('click',()=>{
            localStorage.setItem("Product",JSON.stringify(list[i]));
            window.location.href = "productPage.html"
        })
        let img = document.createElement('img');
        img.setAttribute("src" , list[i].photoURL)
        img.setAttribute("alt" ,  list[i].category)


        let h2 = document.createElement('h2');
        h2.innerText = list[i].NameCar;

        let p = document.createElement('p');
        p.innerText = `$ ${list[i].Price}`


        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)
        customercCont.appendChild(div);
    }
}



module.exports = {search , category ,price ,displyListOfProduct };