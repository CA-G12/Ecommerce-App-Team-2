const { displayMatches } = require("./logic");
const arrObj = [
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
    NameCar: "BMD2",
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
    NameCar: "BMD2",
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
    NameCar: "BMD3",
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
    NameCar: "BMD3",
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
    NameCar: "BMD3",
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
    NameCar: "BMD3",
    TitleCar: "BMW2020",
    Price: 28000,
    photoURL:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
    category: "cars",
    id: "1",
  },
];

describe("Testing filter function", () => {
  test("Should return 1 when given BMD1", () => {
    const actual = displayMatches(arrObj, "BMD1").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("Should return 4 when given BMD3", () => {
    const actual = displayMatches(arrObj, "BMD1").length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
  test("Should return 2 when given BMD2", () => {
    const actual = displayMatches(arrObj, "BMD3").length;
    const expected = 4;
    expect(actual).toBe(expected);
  });
});
