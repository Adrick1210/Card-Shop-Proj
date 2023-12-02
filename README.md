# Yugioh Card Shop

### By Christian Alexander

## Description

I am creating a search through data base that uses YUGIOH card data. A user can look up any card
and receive information back about a specific card. I want to print the card itself, as well as
the year printed, and the set it was printed with.

## API

Yu-Gi-Oh! API by YGOPRODeck: https://ygoprodeck.com/api-guide/

Sample Fetch call:

```js
const fetchCard = fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
fetchCard
  .then((card) => {
    return card.json();
  })
  .then((data) => {
    console.log(data);
  });
```

Data returned:

```json
[
  {
    "id": 71015787,
    "name": "Silent Wobby",
    "type": "Effect Monster",
    "frameType": "effect",
    "desc": "During your Main Phase: You can Special Summon this card from your hand to your opponent's side of the field. When Summoned this way: Draw 1 card, and if you do, your opponent gains 2000 Life Points. You can only use this effect of \"Silent Wobby\" once per turn. The hand size limit of this card's controller becomes 3.",
    "atk": 1000,
    "def": 2000,
    "level": 4,
    "race": "Fish",
    "attribute": "WATER",
    "card_sets": [
      {
        "set_name": "Premium Gold",
        "set_code": "PGLD-EN013",
        "set_rarity": "Gold Secret Rare",
        "set_rarity_code": "(GScR)",
        "set_price": "6.83"
      }
    ],
    "card_images": [
      {
        "id": 71015787,
        "image_url": "https://images.ygoprodeck.com/images/cards/71015787.jpg",
        "image_url_small": "https://images.ygoprodeck.com/images/cards_small/71015787.jpg",
        "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/71015787.jpg"
      }
    ],
    "card_prices": [
      {
        "cardmarket_price": "0.92",
        "tcgplayer_price": "1.82",
        "ebay_price": "9.99",
        "amazon_price": "5.99",
        "coolstuffinc_price": "4.99"
      }
    ]
  }
]
```

## Mockup

Basic search design with a input and a button. Once the user inputs a search, the item should generate to the page

#### Desktop View

![My Desktop View](/images/desktop.png)

#### Mobile View

![My Mobile View](/images/mobile.png)

DEPLYOYED SITE: [Click Here]()

## Schedule of Work

| Day   | Goal                                 | What I did accomplish |
| ----- | ------------------------------------ | --------------------- |
| Sat   | Create Readme, Deploy, Get Approval  |Approval received      |
| Sun   | Build fetch of data in JS file       |                       |
| Mon   | Render data from API on screen       |                       |
| Tues  | Build form for user to interact with |                       |
| Wed   | wrap up functionality                |                       |
| Thurs | mobile layout styling                |                       |
| Fri   | Desktop layout styling               |                       |
| Sat   | Present Project                      |                       |
