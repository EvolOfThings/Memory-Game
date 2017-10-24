/*
 * Create a list that holds all of your cards
 */

const allCards = [
  'fa fa-diamond',
  'fa fa-diamond',
  'fa fa-paper-plane-o',
  'fa fa-paper-plane-o',
  'fa fa-anchor',
  'fa fa-anchor',
  'fa fa-bolt',
  'fa fa-bolt',
  'fa fa-cube',
  'fa fa-cube',
  'fa fa-leaf',
  'fa fa-leaf',
  'fa fa-bicycle',
  'fa fa-bicycle',
  'fa fa-bomb',
  'fa fa-bomb'
];


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

shuffledCards = shuffle(allCards);


// shortcuts variables
deck = $('.deck');

let openedCards = [];



// click event listener to the card elements.
deck.on('click', '.card', function() {

let opened = $(this).addClass('open show');

// disable the card from being clicked again after it is opened
  if($(this).hasClass('open')) {
    $(this).prop('disabled', true);
  } else {
    return opened ;
  }

  // push the cards to openedCards array
openedCards.push(opened.children().attr('class')); // spread is used on opened array to avoid nesting
console.log(openedCards);

compareCards();
});


  // compare the clicked cards array
compareCards = (array) => {
  if(openedCards.length === 2){
    let classCard1 = openedCards[0];
    let classCard2 = openedCards[1];
    console.log(classCard1, classCard2)
    if(classCard1 === classCard2) {
      console.log('matched');
    } else {
      console.log('not a match');
      //flipBack function
    }
  }
}




  // if has same children classes  then add match class
























/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
























