import localLoad from './local-storage.js';
import localSave from './local-save.js';
import creatureList from './creatures.js';

const hatDisplay = document.getElementById('hats');
const message = document.getElementById('message');
import hatInventory from './hat-inventory.js';

const yourHat = document.getElementById('your-hat');
const creature = document.getElementById('creature-image');


const profile = localLoad('profile');

creature.src = creatureList[profile.creatureId];

if(profile.hat) {
    yourHat.src = hatInventory[profile.hat].src;
}


function hatClicked(index, span) {
    // check money
    if(hatInventory[index].cost > profile.money) {
        message.textContent = 'You don\'t have enough money to buy this hat. Go back to the game to win more money.';
    }
    else {
        message.textContent = 'Yay! What a great new hat!';
        profile.money -= hatInventory[index].cost;
        profile.hat = index;
        profile.happiness += hatInventory[index].happiness;
        localSave('profile', profile);
        yourHat.src = hatInventory[profile.hat].src;
        span.classList.add('hidden');

        localSave('bought-hat', index);

    }

    // remove hat from store
    // set hat in profile
    //happiness increase
}

for(let i = 0; i < hatInventory.length; i++) {
    const hatSpan = document.createElement('span');
    const hatImage = document.createElement('img');
    hatSpan.id = hatInventory[i].id;
    if(profile.hat === i) {
        hatSpan.classList.add('hidden');

    }
    hatImage.src = hatInventory[i].src;
    hatSpan.classList.add('hat-span');
    hatSpan.appendChild(hatImage);
    hatDisplay.appendChild(hatSpan);
    hatSpan.addEventListener('click', function(event) {
        hatClicked(i, event.target);
    });
}
