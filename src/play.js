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
const redealButton = document.getElementById('redeal');

const deck = [];

let shuffled = shuffle(deck);
let theirCard = shuffled.pop();
let lastPlayedCard = null;

function redeal() {
    const deck = [];
    while(yourHandDisplay.firstChild)
    {
        yourHandDisplay.removeChild(yourHandDisplay.firstChild);
    }
    while(yourPlayedCardsDisplay.firstChild)
    {
        yourPlayedCardsDisplay.removeChild(yourPlayedCardsDisplay.firstChild);
    }
    while(theirPlayedCardsDisplay.firstChild)
    {
        theirPlayedCardsDisplay.removeChild(theirPlayedCardsDisplay.firstChild);
    }
    redealButton.classList.add('hidden');
    gameResultDisplay.textContent = null;

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
    shuffled = shuffle(deck);
    theirCard = shuffled.pop();
    const theirPlayedCardSpan = document.createElement('span');
    theirPlayedCardSpan.textContent = theirCard.number + theirCard.suit;
    theirPlayedCardsDisplay.appendChild(theirPlayedCardSpan);
    lastPlayedCard = null;
    for(let i = 0; i < 3; i++) {
        let yourCard = shuffled.pop();
        const yourCardDisplay = createCard(yourCard, yourHandDisplay);
        yourCardDisplay.addEventListener('click', function(event) {
            cardClicked(yourCard);
            event.target.classList.add('hidden');
        });
    }
}

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
        redealButton.classList.remove('hidden');
    }
}

function createCard(yourCard, container) {
    const yourCardDisplay = document.createElement('span');
    yourCardDisplay.textContent = yourCard.number + yourCard.suit;
    container.appendChild(yourCardDisplay);
    return yourCardDisplay;
}


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
        redealButton.classList.remove('hidden');
    } else {
        gameResultDisplay.textContent = 'The shark stays in another round.';
    }
});

deckDraw.addEventListener('click', function() {
    const yourCard = shuffled.pop();
    // createCard(yourCard, yourPlayedCardsDisplay);
    cardClicked(yourCard);
});

redealButton.addEventListener('click', function() {
    redeal();
});

redeal();
