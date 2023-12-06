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
      // name of card for now
      const cardName = data.data[0].name;
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
      // card image small sized for mobile view
      const cardImgSma = data.data[0].card_images[0].image_url_small;
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
      console.log(data);

      // print the information to the page
      printPriceHead();
      // I loop over the array of prices and invoke my function to print the information
      for (let i = 0; i < 5; i++) {
        printPrice(priceInfo[i].market.replace("_", " ").toUpperCase() + ":");
        printPrice(`$${priceInfo[i].price}`);
      }

      printSetHead();
      // I loop over my sets to a certain range
      for (let i = 0; i < 6; i++) {
        printSet(`- ${setInfo[i].set} -`);
        printSet(setInfo[i].rarity);
      }
      // I print the card name and image
      printName(`${cardName}`, `${cardImgSma}`);
      console.log(data)
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
  newDiv.classList.add("seller");
  newDiv.innerText = market;
  priceTest.appendChild(newDiv);
}

function printSet(cardSet) {
  const setTest = document.querySelector("#set");
  const newDiv = document.createElement("div");
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

// function to handle form submission for user
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const cardInfo = formData.get("cardName");
  getCard(cardInfo);
}

//******************************** */
// Main Code
//******************************** */
// call for the targeted piece of data testing:
// getCard("dark magician");
// Event listener
document.querySelector("form").addEventListener("submit", handleSubmit);
