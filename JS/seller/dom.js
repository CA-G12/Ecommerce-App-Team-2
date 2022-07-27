const tableBody = document.querySelector(".table-body");

const listOfProduct = JSON.parse(localStorage.getItem("listOfProduct"));
// this function responsible for create HTML tags
function createElement(tag) {
  return document.createElement(tag);
}
// this function responsible for showing all products
function createElements(obj) {
  const tr = createElement("tr");

  const price = createElement("td");
  price.textContent = obj.price;

  const tdImage = createElement("td");
  tdImage.innerHTML = `<img src=${obj.img} alt="bmw" />`;

  const name = createElement("td");
  name.textContent = obj.name;

  tr.appendChild(name);
  tr.appendChild(price);
  tr.appendChild(tdImage);

  tableBody.appendChild(tr);
}

listOfProduct.forEach((e) => {
  createElements(e);
});
