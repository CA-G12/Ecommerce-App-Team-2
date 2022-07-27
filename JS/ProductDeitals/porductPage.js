let img = document.getElementById("img");
let title = document.getElementById("title");
let desc = document.querySelector('.description');
let price = document.querySelector('.price');
const product = JSON.parse(localStorage.getItem('product'));
const DisplayProduct = (product) => {
    img.src = product.img;
    title.textContent = product.name;
    price.textContent = product.price;
    desc.textContent = product.desc;
}
DisplayProduct(product);

