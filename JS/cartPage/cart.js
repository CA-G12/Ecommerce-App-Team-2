let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
let price = JSON.parse(localStorage.getItem('price'));
// console.log(salary);
// console.log(price);

JSON.parse(localStorage.getItem("Product"))

function CreateViews(element) {
    console.log(element);
    let section = document.querySelector('.cart');
    let contain = document.querySelector('.container');
    // let cartContent = document.querySelector('.cart-content');

    
    let titleCart = document.querySelector('.title-cart span');
    titleCart.innerText = `$ ${price}`


    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.classList.add('cart-content');

    div.innerHTML = `<div class="car-items">
    <img src="${element.photoURL}" alt="car" class="carx5">
    <div class="car-item-content">
      <h2>${element.TitleCar}</h2>
      <p>
       ${element.Description}
      </p>
    </div>
    <div class="cart-icon">
      <img src="../images/trash-solid.svg" alt="trash" class="trash">
      <p>total: <span class="total">$ ${element.Price}</span></p>
    </div>
  </div>
`
    contain.appendChild(div);
    console.log(section);
}

if (cartProducts) {
    addValuesToViews(cartProducts);
}
function addValuesToViews(cartProducts) {
    cartProducts.forEach(element => {
        CreateViews(element);
    });
}