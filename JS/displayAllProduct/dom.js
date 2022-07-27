

let listOfProduct = [
    {
        NameCar:"BMW",
        TitleCar :"BMW2020",
        Price:28000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "bus",
        id:"1"

    },
    {
        NameCar:"BMW",
        TitleCar :"BMW2021",
        Price:28000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "cars",
        id:"2"

    },
    {
        NameCar:"BMW",
        TitleCar :"BMW2022",
        Price:8000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "cars",
        id:"3"

    }
]


let categoryOfProduct = document.querySelector("select")
let searchForm = document.querySelector(".bar-search img")
let text = document.querySelector(".bar-search input[placeholder=search]")
let select = document.querySelector("select");

let min = document.querySelector("#min");
let max = document.querySelector("#max");

let customercCont  = document.querySelector('.customer-cont');
let customerContent = document.querySelectorAll('.customer-content');
localStorage.setItem("listOfProduct" ,JSON.stringify(listOfProduct));


let Product = {
        NameCar:"BMW",
        TitleCar :"BMW2020",
        Price:28000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "bus",
        id:"1"

    };
localStorage.setItem("Product",JSON.stringify(Product));



let list =  JSON.parse(localStorage.getItem("listOfProduct"));
displyListOfProduct(list);


searchForm.addEventListener('click',()=>{
    list = search(list,text.value)
    displyListOfProduct(list);
})


categoryOfProduct.addEventListener('click',()=>{
    if(select.value != "All"){
        list = category(list,select.value)
    }else{
        list =  JSON.parse(localStorage.getItem("listOfProduct"));
    }
    displyListOfProduct(list);
} )


min.addEventListener('click',()=>{
    list = price(list,min.value , max.value);
    displyListOfProduct(list);
})

max.addEventListener('click',()=>{
    console.log("max")
    list = price(list,min.value , max.value);
    displyListOfProduct(list);
})
