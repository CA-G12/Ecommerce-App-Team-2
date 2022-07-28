// localStorage.setItem("cartProducts", [JSON.stringify(addToCart(product, CartProducts))]);

const product = JSON.parse(localStorage.getItem('Product'));

const DisplayProduct = (product) => {
    img.src = product.photoURL;
    title.textContent = product.TitleCar;
    price.textContent = product.Price;
    desc.textContent = product.Description;
}

const CartProducts = localStorage.getItem('CartProducts');

const addToCart = (product, CartProducts) => {
    localStorage.setItem("price" , parseInt(localStorage.getItem("price"))+parseInt(product.Price) );
// price = price + product.price ; 
    // let cartProducts = [];
    // console.log(CartProducts);
    if (CartProducts != '') {
        cartProducts.push(product);
    } else {
         CartProducts = [];
        CartProducts.push(product);
    }
    // location.href('./customer.html');
    return CartProducts;

}
function setItemTolocal() {
    localStorage.setItem("cartProducts", JSON.stringify(addToCart(product, CartProducts)));
}

