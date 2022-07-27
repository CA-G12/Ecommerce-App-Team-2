


function search(list , text){
    list =  JSON.parse(localStorage.getItem("listOfProduct"));
    list = list.filter((val,index)=>{
            if(text == list[index].NameCar.slice(0,text.length)){
                return val
            }
    }) 
    return list;
} 





//////////////////////////////////////////////////////////
function category(list , text){ 
    list =  JSON.parse(localStorage.getItem("listOfProduct"));
    list = list.filter((val,index)=>{
            if(text == list[index].category){
                return val
            }
    }) 
    return list;
} 





function price(list ,min = 0,max = Infinity){
    list =  JSON.parse(localStorage.getItem("listOfProduct"));
    console.log("min = " + min + "   max = " + max)
    console.log("min")
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


// let selectProduct = JSON.parse(localStorage.getItem("Product"));





{/* <img src="" alt="car">
<h2>THE M2 COMPETITION</h2>
<p>$1500</p> */}