import localLoad from './local-load.js';
import localSave from './local-save.js';
import creatureList from './creatures.js';

const hatDisplay = document.getElementById('hats');
const message = document.getElementById('message');
import hatInventory from './hat-inventory.js';
import creatureProfile from './profile.js';

const yourHatDisplay = document.getElementById('your-hat');
const creature = document.getElementById('creature-image');

const profile = localLoad('profile');
creatureProfile();

if(profile.happiness > 4) {
    creature.src = creatureList[profile.creatureId].happyImage;
}
else {
    creature.src = creatureList[profile.creatureId].sadImage;
}

if(profile.hat) {
    yourHatDisplay.src = hatInventory[profile.hat].src;
    yourHatDisplay.alt = hatInventory[profile.hat].alt;
}

function hatEntered(index) {
    const yourHats = localLoad('yourHats');
    if(!yourHats || !yourHats.includes(index)) {
        message.innerHTML = hatInventory[index].description + 
        '<br> Cost: ' + hatInventory[index].cost;
    }
}

function hatClicked(index, targetSpan) {
    if(hatInventory[index].cost > profile.money) {
        message.textContent = 'You don\'t have enough money to buy this hat. Go back to the game to win more money.';
    }
    else {
        message.textContent = 'Yay! What a great new hat!';
        profile.money -= hatInventory[index].cost;
        profile.hat = index;
        profile.happiness += hatInventory[index].happiness;
        localSave('profile', profile);
        yourHatDisplay.src = hatInventory[profile.hat].src;
        targetSpan.classList.add('invisible');

        let yourHats = localLoad('yourHats');
        if(!yourHats){
            yourHats = [];
        } 
        yourHats.push(index);
        localSave('yourHats', yourHats);
        creatureProfile();
    }
}
let yourHats = localLoad('yourHats');
if(!yourHats){
    yourHats = [];
}

for(let i = 0; i < hatInventory.length; i++) {
    const hatSpan = document.createElement('span');
    const hatImage = document.createElement('img');
    hatImage.classList.add('sale-hats');
    hatSpan.id = hatInventory[i].id;
    if(yourHats.includes(i)) {
        hatSpan.classList.add('hidden');
    }
    hatImage.src = hatInventory[i].src;
    hatImage.alt = hatInventory[i].alt;
    hatSpan.classList.add('hat-span');
    hatSpan.appendChild(hatImage);
    hatDisplay.appendChild(hatSpan);
    hatSpan.addEventListener('click', function(event) {
        hatClicked(i, event.target);
    });
    hatSpan.addEventListener('mouseover', function() {
        hatEntered(i);
    });
}
