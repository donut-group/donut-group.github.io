import localLoad from './local-load.js';
import localSave from './local-save.js';
import creatureList from './creatures.js';

const hatDisplay = document.getElementById('hats');
const message = document.getElementById('message');
import hatInventory from './hat-inventory.js';

const yourHatDisplay = document.getElementById('your-hat');
const creature = document.getElementById('creature-image');


const profile = localLoad('profile');

if(profile.happinessLevel > 4) {
    creature.src = creatureList[profile.creatureId].happyImage;
}
else {
    creature.src = creatureList[profile.creatureId].sadImage;
}

if(profile.hat) {
    yourHatDisplay.src = hatInventory[profile.hat].src;
}


function hatClicked(index, targetSpan) {
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
        yourHatDisplay.src = hatInventory[profile.hat].src;
        targetSpan.classList.add('hidden');

        //need to make hats disappear from the store - use same array for bought hats and your hats

        let yourHats = localLoad('yourHats');
        if(!yourHats){
            yourHats = [];
        } 
        yourHats.push(index);
        localSave('yourHats', yourHats);
    }

    // remove hat from store
    // set hat in profile
    //happiness increase
}
let yourHats = localLoad('yourHats');
if(!yourHats){
    yourHats = [];
}

for(let i = 0; i < hatInventory.length; i++) {
    const hatSpan = document.createElement('span');
    const hatImage = document.createElement('img');
    hatSpan.id = hatInventory[i].id;
    if(yourHats.includes(i)) {
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
