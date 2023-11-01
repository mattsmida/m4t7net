"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blu", "gre", "ora", "pur",
  "red", "blu", "gre", "ora", "pur",
];

const colors = shuffle(COLORS);

createCards(colors);

/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each ~~div~~ td DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game"); // Given by RS.
  let cardNum = 0;
  let newTd;
  const newTr = document.createElement('tr');

  for (let color of colors) {   // Given by RS.
    // Fill in the table child of #game
    // First version will have two rows with five cells each, so </tr> after 5.
    // Each td gets id of 'card-xx' and classes 'card ccc' where ccc is color.
    if (cardNum % 5 === 0) { gameBoard.querySelector('table').append(newTr); }
    newTd = document.createElement('td');
    newTd.id = 'card-0' + cardNum.toString(); // TODO: padding sans hardcode.
    newTd.className = 'card ' + color;
    newTd.addEventListener('click', function(e) {
      flipCard(e.target); // TODO: instead of fC(), use hCC() to flip or not.
    });
    gameBoard.querySelector('table').append(newTd);
    cardNum++;
  }
}

/** Flip a card face-up. */
function flipCard(card) {
  card.classList.add('up');
  setTimeout(() => {
  card.classList.remove('up');
  }, 1000);
}

/** Flip a card face-down. */
function unFlipCard(card) {
  // TODO: Write this.
}

/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  // TODO: Write this.
}
