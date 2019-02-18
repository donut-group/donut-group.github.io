import cardWin from '../src/card-game.js';
const yourCard = document.getElementById('your-card');
const theirCard = document.getElementById('opponent-card');
const playButton = document.getElementById('play-button');
const gameResultDisplay = document.getElementById('game-result');

//deck of cards, shuffle it. 

const deck = [1, 2, 3];

function shuffle(array) {
    let counter = array.length;
    while(counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array [counter] = array[index];
        array[index] = temp;
    }
    console.log(array);
    return array;
}

console.log(shuffle(deck));

playButton.addEventListener('click', function() {
    let shuffled = shuffle(deck);

    let yourCardNumber = shuffled[0];
    let theirCardNumber = shuffled[1];
    
    yourCard.textContent = yourCardNumber;
    theirCard.textContent = theirCardNumber;

    if(cardWin(yourCardNumber, theirCardNumber)) {
        gameResultDisplay.textContent = 'You Win!';
    }
    else {
        gameResultDisplay.textContent = 'You Lose!';
    }



});


