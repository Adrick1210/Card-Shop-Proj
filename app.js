//******************************** */
// Global Variables
//******************************** */
let priceInfo = [];
let setInfo = [];

//******************************** */
// Fetch Data
//******************************** */
// define a function that grabs my card by name
function getCard(name) {
  // fetch from the data url
  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
    // return the response json
    .then((res) => res.json())
    // access the data
    .then((data) => {
      // target specific key value pairs
      priceInfo = [];
      setInfo = [];

      const cardName = data.data[0].name;
      // card image sized for mobile view
      const cardImgSma = data.data[0].card_images[0].image_url;
      // target card prices and print out each price of the card via its market
      const cardPrice = data.data[0].card_prices[0];
      for (let prices in cardPrice) {
        let priceTemplate = {
          market: "",
          price: "",
        };
        priceTemplate.market = prices;
        priceTemplate.price = cardPrice[prices];
        priceInfo.push(priceTemplate);
      }

      // target the card sets I want to print
      const cardSets = data.data[0].card_sets;
      for (let sets of cardSets) {
        let setTemplate = {
          set: "",
          rarity: "",
        };
        setTemplate.set = sets.set_name;
        setTemplate.rarity = sets.set_rarity;
        setInfo.push(setTemplate);
      }
      const fiveRandomSets = fiveRanSets(setInfo);
      
      // print the information to the page
      printPriceHead();
      // I loop over the array of prices and invoke my function to print the information
      for (let i = 0; i < 5; i++) {
        printPHead(`${priceInfo[i].market.replace('_', '-')}:`);
        printPrice(`$${priceInfo[i].price}`);
      }

      printSetHead();
      for (let i = 0; i < 5; i++) {
        printSHead(`-${fiveRandomSets[i].set}-`);
        printSet(fiveRandomSets[i].rarity);
      }

      // I print the card name and image
      printName(`${cardName}`, `${cardImgSma}`);
    });
}

//******************************** */
// Functions for rendering
//******************************** */
function printName(card, image) {
  const cardDiv = document.querySelector(".card");
  cardDiv.innerHTML = `
  <h1>${card}:</h1>
  <img src=${image} />
  `;
}

function printPrice(market) {
  const priceTest = document.querySelector("#price");
  const newDiv = document.createElement("div");
  newDiv.classList.add("price");
  newDiv.innerText = market;
  priceTest.appendChild(newDiv);
}

function printPHead(market) {
  const priceTest = document.querySelector("#price");
  const newDiv = document.createElement("div");
  newDiv.classList.add("seller");
  newDiv.innerText = market;
  priceTest.appendChild(newDiv);
}

function printSet(cardSet) {
  const setTest = document.querySelector("#set");
  const newDiv = document.createElement("div");
  newDiv.classList.add("rating");
  newDiv.innerText = cardSet;
  setTest.appendChild(newDiv);
}

function printSHead(cardSet) {
  const setTest = document.querySelector("#set");
  const newDiv = document.createElement("div");
  newDiv.classList.add("set-name");
  newDiv.innerText = cardSet;
  setTest.appendChild(newDiv);
}

// header prints for the render
function printPriceHead() {
  const headPrice = document.querySelector("#price");
  const priceHead = document.createElement("h2");
  priceHead.classList.add("price-head");
  priceHead.innerText = "Market Values:";
  headPrice.appendChild(priceHead);
}

function printSetHead() {
  const headSet = document.querySelector("#set");
  const setHead = document.createElement("h2");
  setHead.classList.add("set-head");
  setHead.innerText = "Sets Printed With:";
  headSet.appendChild(setHead);
}

// function that will print five random sets and rarities per render
const fiveRanSets = (arr) => {
  const newInfo = []; // blank array to store our five items
  const infoCopy = [...arr]; // copy of array that was passed in
  // loop 5 times, remove one item from copy on each loop
  for (let i = 0; i < 5; i++) {
    // a random index with the arrays length
    const randomIndex = Math.floor(Math.random() * infoCopy.length);
    // splice item from copy and push into new array
    newInfo.push(infoCopy.splice(randomIndex, 1)[0]);
  }

  // return array of 5 items after look
  return newInfo;
};

// function to handle form submission for user
function handleSubmit(event) {
  document.querySelector("#price").innerHTML = "";
  document.querySelector("#set").innerHTML = "";
  
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const cardInfo = formData.get("cardName");
  getCard(cardInfo);
  document.querySelector("#user-input").value = "";
}

//******************************** */
// Main Code
//******************************** */
// call for the targeted piece of data testing:
// getCard("dark magician");
// getCard("borreload savage dragon");

// Event listener
document.querySelector("form").addEventListener("submit", handleSubmit);
