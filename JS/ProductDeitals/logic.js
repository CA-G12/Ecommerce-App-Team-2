const product = JSON.parse(localStorage.getItem('Product'));

const DisplayProduct = (product) => {
    img.src = product.photoURL;
    title.textContent = product.TitleCar;
    price.textContent = product.Price;
    desc.textContent = product.Description;
}

const CartProducts = JSON.parse(localStorage.getItem('CartProducts'));

const addToCart = (product, CartProducts) => {
price = price + product.price ; 
    let cartProducts = [];
    console.log(CartProducts);
    if (CartProducts) {
        cartProducts = [...CartProducts];
        cartProducts.push(product);
    } else {
        cartProducts.push(product);
    }
    location.href('./customer.html');
    return cartProducts;

}
function setItemTolocal() {
    localStorage.setItem("cartProducts", JSON.stringify(addToCart(product, CartProducts)));
}

