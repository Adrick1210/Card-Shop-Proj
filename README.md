# Yugioh Card Shop

### By Christian Alexander

## Description

I am creating a search through data base that uses YUGIOH card data. A user can look up any card
and receive information back about a specific card. I want to print the card itself, as well as
the year printed, and the set it was printed with.

## API

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
{id: 34541863, name: '"A" Cell Breeding Device', type: 'Spell Card', frameType: 'spell', desc: 'During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.', …},

{id: 64163367, name: '"A" Cell Incubator', type: 'Spell Card', frameType: 'spell', desc: 'Each time an A-Counter(s) is removed from play by …e A-Counters on this card among face-up monsters.', …},

{id: 91231901, name: '"A" Cell Recombination Device', type: 'Spell Card', frameType: 'spell', desc: 'Target 1 face-up monster on the field; send 1 "Ali…dd 1 "Alien" monster from your Deck to your hand.', …},

{id: 73262676, name: '"A" Cell Scatter Burst', type: 'Spell Card', frameType: 'spell', desc: 'Select 1 face-up "Alien" monster you control. Dest…its Level among your opponent's face-up monsters.', …},

{id: 98319530, name: '"Infernoble Arms - Almace"', type: 'Spell Card', frameType: 'spell', desc: 'While this card is equipped to a monster: You can …lmace"" effect per turn, and only once that turn.', …},

{id: 37478723, name: '"Infernoble Arms - Durendal"', type: 'Spell Card', frameType: 'spell', desc: 'While this card is equipped to a monster: You can …endal"" effect per turn, and only once that turn.', …},

{id: 64867422, name: '"Infernoble Arms - Hauteclere"', type: 'Spell Card', frameType: 'spell', desc: 'While this card is equipped to a monster: You can …clere"" effect per turn, and only once that turn.', …},

{id: 90861137, name: '"Infernoble Arms - Joyeuse"', type: 'Spell Card', frameType: 'spell', desc: 'While this card is equipped to a monster: You can …yeuse"" effect per turn, and only once that turn.', …},

{id: 44256816, name: '1st Movement Solo', type: 'Spell Card', frameType: 'spell', desc: 'If you control no monsters: Special Summon 1 Level… activate this card, except "Melodious" monsters.', …},

{id: 86988864, name: '3-Hump Lacooda', type: 'Effect Monster', frameType: 'effect', desc: 'If there are 3 face-up "3-Hump Lacooda" cards on y… of the field, Tribute 2 of them to draw 3 cards.', …},

{id: 11714098, name: '30,000-Year White Turtle', type: 'Normal Monster', frameType: 'normal', desc: 'A huge turtle that has existed for more than 30,000 years.', …},
]
```