// fetch data
// define a function that grabs my card name for now

function getCard(name) {
  // fetch from the data url
  const cardName = fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
  );
  cardName
    .then((res) => {
      return res.json();
    })
    .then((card) => {
      console.log(card);
    });
}

// functions


// main code
getCard("red-eyes black dragon");
