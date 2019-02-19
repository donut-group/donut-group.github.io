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

function cardClicked(yourCard) {
    const playedCardSpan = document.createElement('span');
    playedCardSpan.textContent = yourCard.number + yourCard.suit;
    yourPlayedCardsDisplay.appendChild(playedCardSpan);
    if(cardWin(yourCard, theirCard)) {
        gameResultDisplay.textContent = 'You stay in, for now';
        sharkTurnButton.classList.remove('hidden');
    }
    else {
        gameResultDisplay.textContent = 'You lose both pride and money';
    }
}

for(let i = 0; i < 3; i++) {
    const yourCardDisplay = document.createElement('span');
    let yourCard = shuffled.pop();
    yourCardDisplay.addEventListener('click', function(event) {
        cardClicked(yourCard);
        event.target.classList.add('hidden');
    });
    yourCardDisplay.textContent = yourCard.number + yourCard.suit;
    yourHandDisplay.appendChild(yourCardDisplay);
}

theirPlayedCardsDisplay.textContent = theirCard.number + theirCard.suit;

sharkTurnButton.addEventListener('click', function(){
    sharkTurnButton.classList.add('hidden');
    theirCard = shuffled.pop();
    const theirPlayedCardSpan = document.createElement('span');
    theirPlayedCardSpan.textContent = theirCard.number + theirCard.suit;
    theirPlayedCardsDisplay.appendChild(theirPlayedCardSpan);


});

console.log(shuffle(deck));




