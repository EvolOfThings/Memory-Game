/*
 * Create a list that holds all of your cards
 */

const allCards = [
  'fa fa-diamond',
  'fa fa-paper-plane-o',
  'fa fa-anchor',
  'fa fa-bolt',
  'fa fa-cube',
  'fa fa-leaf',
  'fa fa-bicycle',
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

shuffle(allCards);

/*
 * Display the cards on the page
 * DONE  - shuffle the list of cards using the provided "shuffle" method
 * DONE  - loop through each card and create its HTML
 * DONE  - add each card's HTML to the page
 */

//generated li and i element for each card

generateCards = () => {
  for(let i = 0; i < 2; i++) {
    const shuffledCards = shuffle(allCards);
    //console.log(shuffledCards);
    for(const element of shuffledCards) {
      const deckList = $('ul.deck');
      let li = $('<li/>').addClass('card').appendTo(deckList);
      let iTag = $('<i/>').addClass(element).appendTo(li);
    }
  }
};

generateCards();


/*
 * set up the event listener for a card. If a card is clicked:
 * DONE - display the card's symbol (put this functionality in another function that you call from this one)
 * DONE - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 * DONE - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



// shortcuts variables
let deck = $('.deck'),
    openedCards = [],
    matches = 0,
    movesCount = 0,
    moves = $('.moves');



//Reminder: In fat arrow functions, this never gets bound to a new value

// click event listener to the card elements.
deck.on('click', '.card', (event) => {
  let cardClicked = $(event.target);
  console.log(cardClicked);

console.log(event.currentTarget);
  showSymbol(cardClicked);
});


//Display the cards
showSymbol = (card) => {
  card.addClass('open show');

  movesCounter();
  moves.text(movesCount);

  console.log(card);
  console.log(event.currentTarget); // logs deck as target and hence open show classes are getting added

  addToOpenedCards(card);
};


//add opened cards to openedCards array
addToOpenedCards = (card) => {
  let x = card.children().attr('class');
  console.log(x);

  openedCards.push(card);
  console.log(openedCards);

  compareCards();
};


//  compare the clicked cards  in openedCards array
compareCards = () => {
  if(openedCards.length === 2){
    let classCard1 = openedCards[0].children().attr('class'),
        classCard2 = openedCards[1].children().attr('class');
    console.log(classCard1, classCard2)
    if(classCard1 === classCard2) {
      console.log('matched');
      lockMatch();
    } else {
      console.log('not a match');
      flipBack();  //problem: if it's not a match it deletes the open show immediately so second card is never shown
    //cardEffect();
    }
  }
};


  // if has same children classes  then add match class
lockMatch = () => {
  openedCards[0].removeClass('open show').addClass('match');
  openedCards[1].removeClass('open show').addClass('match');
  console.log(...openedCards);
  matches++;
  if (matches === 8) {
    gameWon();
  }
  openedCards.splice(0,2);
  console.log(openedCards);
  };



// flipBack function for unmatching cards
flipBack = () => {
  //this effect added so that it shows the second clicked card otherwise flipbacks without showing the second
  openedCards[0].delay(300).fadeOut("slow").fadeIn("slow");
  openedCards[1].delay(300).fadeOut("slow").fadeIn("slow", () => {
  console.log(...openedCards); // to check what array items go through
  openedCards[0].removeClass('open show');
  openedCards[1].removeClass('open show');
  console.log(...openedCards);
  removeCardsFromList();
  });
  console.log(...openedCards);
};


removeCardsFromList = () => {
    openedCards.shift();
    openedCards.shift();
    console.log("pos: ",openedCards);
}

//Moves counter

movesCounter = () => {
    movesCount++;
}



// restart the game

$('.restart').on('click', (eve) => {
  let clicked = $(eve.target);
  restart();
  console.log(clicked);
});


restart = () => {
   openedCards = [];
      matches = 0;
      movesCount = 0;

      moves.text(movesCount);
      deck.empty();
      shuffle(allCards);
      generateCards();
}


//when matches = 8, game won
gameWon = () => {

  // from https://www.w3schools.com/howto/howto_css_modals.asp

const modal = $('#myModal');
const span = document.getElementsByClassName("close")[0];


modal.css('display', 'block');

  // Total number of moves made
  $('.movesMade').text(`Won in ${movesCount} moves`);

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => modal.css('display', 'none');

  // When the user clicks anywhere outside of the modal, close it
$(window).on('click', (event) => {
   const target = event.target;
   // console.log(target);
    if (target.id == 'myModal') {
      modal.css('display', 'none');
    }
  });

    //To play again
  $('.playAgain').on('click', () => location.reload());

}



//                TO FIX
// 1. disable click for opened card
//2. DONE Modal window click not working

//                TO CODE
// 1. DONE movecounter
// 2. DONE all cards matched - win modal
// 3. DONE restart function




















