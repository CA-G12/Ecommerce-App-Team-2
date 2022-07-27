
const product = {
    name: 'First Class BMW',
    price2: '2000',
    desc: "New BMW for All kinds ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/BMW_M5_IMG_0887.jpg/1200px-BMW_M5_IMG_0887.jpg?20170918155446",
}
const DisplayProduct = (product) => {
    img.src = product.img;
    title.textContent = product.name;
    price.textContent = product.price2;
    desc.textContent = product.desc;
}

const CartProducts = JSON.parse(localStorage.getItem('CartProducts'));

const addToCart = (product, CartProducts) => {
    let cartProducts = [];
    console.log(CartProducts);
    if (CartProducts) {
        cartProducts = [...CartProducts];
        cartProducts.push(product);
    } else {
        cartProducts.push(product);
    }
    return cartProducts;
}
function setItemTolocal() {
    localStorage.setItem("cartProducts", JSON.stringify(addToCart(product, CartProducts)))
}

