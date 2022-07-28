let but = document.querySelector("#save");
let NameCar = document.querySelector("#Name-Car");
let TitleCar = document.querySelector("#Title-Car");
let Price = document.querySelector("#Price");
let photoURL = document.querySelector("input[type=url]");
let Description = document.querySelector("#Description");
let category = document.querySelector("#category");
const d = new Date();

// console.log("don")
but.addEventListener('click' , ()=>{
    console.log("donnnnnnnnnnnnn")
    let obj = {
        NameCar     :NameCar.value,
        TitleCar    :TitleCar.value,
        Price       :Price.value,
        photoURL    :photoURL.value,
        Description :Description.value,
        category    :category.value,
        id          :d.getTime()
    }

    addToList(obj);
})


let Product = {
    NameCar:"BMW2017",
    TitleCar :"BMW2017",
    Price:28000,
    photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
    category : "bus",
    id:"1"

};