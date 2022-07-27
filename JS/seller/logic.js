function displayMatches(listOfProduct, searchTerm) {
  const filteredArr = listOfProduct.filter((e) => {
    return searchTerm === e.NameCar.toUpperCase();
  });
  return filteredArr;
}
module.exports = { displayMatches };
