import cardWin from '../src/card-game.js';
import localLoad from '../src/local-load.js';
import localSave from '../src/local-save.js';
import shuffle from '../src/shuffle.js';
import creatureProfile from '../src/profile.js';

creatureProfile();

const profile = localLoad('profile');

const yourHandDisplay = document.getElementById('your-hand');
const yourPlayedCardsDisplay = document.getElementById('played-cards');
const theirPlayedCardsDisplay = document.getElementById('opponent-played-cards');
const sharkTurnButton = document.getElementById('shark-turn');
const gameResultDisplay = document.getElementById('game-result');
const deckDraw = document.getElementById('deck-draw');
const redealButton = document.getElementById('redeal');

let deck = [];

let lastPlayedCard = null;
let theirCard = null;

function cardClicked(yourCard) {
    const playedCardSpan = document.createElement('span');
    playedCardSpan.textContent = yourCard.number;
    playedCardSpan.classList.add('card');
    playedCardSpan.classList.add(yourCard.suit);
    yourPlayedCardsDisplay.appendChild(playedCardSpan);
    lastPlayedCard = yourCard;
    deckDraw.classList.add('unclickable');
    yourHandDisplay.classList.add('unclickable');

    if(cardWin(yourCard, theirCard)) {
        gameResultDisplay.textContent = 'You stay in, for now';
        sharkTurnButton.classList.remove('hidden');
    }
    else {
        gameResultDisplay.textContent = 'You lose both pride and money';
        profile.money -= 5;
        profile.happiness -= 1;
        localSave('profile', profile);
        redealButton.classList.remove('hidden');
        creatureProfile();
    }
}

function redeal() {
    deck = [];
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
    shuffle(deck);
    theirCard = deck.pop();
    const theirPlayedCardSpan = document.createElement('span');
    theirPlayedCardSpan.textContent = theirCard.number;
    theirPlayedCardSpan.classList.add('card');
    theirPlayedCardSpan.classList.add(theirCard.suit);
    theirPlayedCardsDisplay.appendChild(theirPlayedCardSpan);
    lastPlayedCard = null;
    for(let i = 0; i < 3; i++) {
        let yourCard = deck.pop();
        const yourCardDisplay = createCard(yourCard, yourHandDisplay);
        yourCardDisplay.addEventListener('click', function(event) {
            cardClicked(yourCard);
            event.target.classList.add('hidden');
        });
    }
    yourHandDisplay.classList.remove('unclickable');
    deckDraw.classList.remove('unclickable');
}

function createCard(yourCard, container) {
    const yourCardDisplay = document.createElement('span');
    yourCardDisplay.textContent = yourCard.number;
    yourCardDisplay.classList.add('card');
    yourCardDisplay.classList.add(yourCard.suit);
    container.appendChild(yourCardDisplay);
    return yourCardDisplay;
}

sharkTurnButton.addEventListener('click', function(){   
    sharkTurnButton.classList.add('hidden');
    theirCard = deck.pop();
    const theirPlayedCardSpan = document.createElement('span');
    theirPlayedCardSpan.textContent = theirCard.number;
    theirPlayedCardSpan.classList.add('card');
    theirPlayedCardSpan.classList.add(theirCard.suit);
    theirPlayedCardsDisplay.appendChild(theirPlayedCardSpan);
    yourHandDisplay.classList.remove('unclickable');
    deckDraw.classList.remove('unclickable');
    if(cardWin(lastPlayedCard, theirCard)){
        gameResultDisplay.textContent = 'The shark has lost to you';
        
        profile.money += 10;
        localSave('profile', profile);
        redealButton.classList.remove('hidden');
        creatureProfile();
        yourHandDisplay.classList.add('unclickable');
        deckDraw.classList.add('unclickable');
    } else {
        gameResultDisplay.textContent = 'The shark stays in another round.';
    }
});

deckDraw.addEventListener('click', function() {
    const yourCard = deck.pop();
    // createCard(yourCard, yourPlayedCardsDisplay);
    cardClicked(yourCard);
});

redealButton.addEventListener('click', function() {
    redeal();
});

redeal();
