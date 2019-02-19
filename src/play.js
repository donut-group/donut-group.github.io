import cardWin from '../src/card-game.js';
import localLoad from '../src/local-storage.js';
import localSave from '../src/local-save.js';
import shuffle from '../src/shuffle.js';


const profile = localLoad('profile');

const yourHandDisplay = document.getElementById('your-hand');
const yourPlayedCardsDisplay = document.getElementById('played-cards');
const theirPlayedCardsDisplay = document.getElementById('opponent-played-cards');
const sharkTurnButton = document.getElementById('shark-turn');
const gameResultDisplay = document.getElementById('game-result');
const deckDraw = document.getElementById('deck-draw');

const deck = [];

for(let i = 1; i < 7; i++) {
    const redCard = {
        number: i,
        suit: 'red'
    };
    const blueCard = {
        number: i,
        suit: 'blue'
    };
    deck.push(redCard);
    deck.push(blueCard);
    
}

//deck of cards, shuffle it, display at page open

let shuffled = shuffle(deck);
let theirCard = shuffled.pop();
let lastPlayedCard = null;

function cardClicked(yourCard) {
    const playedCardSpan = document.createElement('span');
    playedCardSpan.textContent = yourCard.number + yourCard.suit;
    yourPlayedCardsDisplay.appendChild(playedCardSpan);
    lastPlayedCard = yourCard;
    if(cardWin(yourCard, theirCard)) {
        gameResultDisplay.textContent = 'You stay in, for now';
        sharkTurnButton.classList.remove('hidden');
        yourHandDisplay.classList.add('unclickable')
        deckDraw.classList.add('unclickable');
    }
    else {
        gameResultDisplay.textContent = 'You lose both pride and money';
    }
}

function createCard(yourCard, container) {
    const yourCardDisplay = document.createElement('span');
    yourCardDisplay.textContent = yourCard.number + yourCard.suit;
    container.appendChild(yourCardDisplay);
    return yourCardDisplay;
}

for(let i = 0; i < 3; i++) {
    let yourCard = shuffled.pop();
    const yourCardDisplay = createCard(yourCard, yourHandDisplay);
    yourCardDisplay.addEventListener('click', function(event) {
        cardClicked(yourCard);
        event.target.classList.add('hidden');
    });

}

theirPlayedCardsDisplay.textContent = theirCard.number + theirCard.suit;

sharkTurnButton.addEventListener('click', function(){   
    sharkTurnButton.classList.add('hidden');
    theirCard = shuffled.pop();
    const theirPlayedCardSpan = document.createElement('span');
    theirPlayedCardSpan.textContent = theirCard.number + theirCard.suit;
    theirPlayedCardsDisplay.appendChild(theirPlayedCardSpan);
    yourHandDisplay.classList.remove('unclickable');
    deckDraw.classList.remove('unclickable');
    if(cardWin(lastPlayedCard, theirCard)){
        gameResultDisplay.textContent = 'The shark has lost to you';
    } else {
        gameResultDisplay.textContent = 'The shark stays in another round.';
    }
});

deckDraw.addEventListener('click', function() {
    const yourCard = shuffled.pop();
    // createCard(yourCard, yourPlayedCardsDisplay);
    cardClicked(yourCard);
});