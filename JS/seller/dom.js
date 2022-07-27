const tableBody = document.querySelector(".table-body");

const listOfProduct = [
  {
    NameCar: "BMD1",
    TitleCar: "BMW2020",
    Price: 28000,
    photoURL:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
    category: "cars",
    id: "1",
  },
  {
    NameCar: "BMD",
    TitleCar: "BMW2021",
    Price: 28000,
    photoURL:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
    category: "cars",
    id: "2",
  },
  {
    NameCar: "BMD",
    TitleCar: "BMW2022",
    Price: 28000,
    photoURL:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
    category: "cars",
    id: "3",
  },
];
// this function responsible for create HTML tags
function createElement(tag) {
  return document.createElement(tag);
}
// this function responsible for showing all products
function createElements(obj) {
  const tr = createElement("tr");

  const price = createElement("td");
  price.textContent = obj.Price;

  const tdImage = createElement("td");
  tdImage.innerHTML = `<img src=${obj.photoURL} alt="bmw" />`;

  const name = createElement("td");
  name.textContent = obj.NameCar;

  tr.appendChild(name);
  tr.appendChild(price);
  tr.appendChild(tdImage);

  tableBody.appendChild(tr);
}

listOfProduct.forEach((e) => {
  createElements(e);
});

// this function responsible for searching about products

const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", () => {
  tableBody.textContent = "";
  const arr = displayMatches(listOfProduct, searchInput.value.toUpperCase());
  arr.forEach((e) => {
    createElements(e);
  });
});
