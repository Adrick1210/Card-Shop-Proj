// fetch data

// define a function that grabs my card by name
function getCard(name) {
  // fetch from the data url
  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
  // return the response json
    .then((res) => res.json())
    // access the data
    .then((data) => {
      console.log(data);
      // target specific key value pairs
      const cardName = data.data[0].name;
      const cardPrice = data.data[0].card_prices[0].tcgplayer_price;

      // test log to view information
      console.log(`${cardName}, price: ${cardPrice}`)
      // print the information to the page
      printName(`${cardName}`, `${cardPrice}`);
    });
}

// functions
function printName(card, price) {
  const cardDiv = document.querySelector(".card");
  cardDiv.innerHTML = `
  <h1>${card}:</h1>
  <h2>Price: $${price}</h2>
  <h2></h2>`;
}
// main code
// call for the targeted piece of data examples:
// getCard("Dark Magician Girl");
getCard('Borreload Savage Dragon');