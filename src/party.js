import localLoad from './local-load.js';
import creatureList from './creatures.js';
import hatInventory from './hat-inventory.js';


const yourHatDisplay = document.getElementById('your-hat');
const creature = document.getElementById('creature-image');
const endMessage = document.getElementById('end-message');
const otherCreatureImage = document.getElementById('other-creature-image');
const otherCreatureHatImage = document.getElementById('party-hat');
const pinataImg = document.getElementById('pinata');

let otherCreatureId = null;

const profile = localLoad('profile');
if(profile.creatureId === 3) {
    otherCreatureId = profile.creatureId - 1;
}
else {
    otherCreatureId = profile.creatureId + 1;
}

if(profile.happiness > 4) {
    creature.src = creatureList[profile.creatureId].happyImage;
    endMessage.textContent = 'Congratulations, you made it to the party! You are so happy!';
    otherCreatureImage.src = creatureList[otherCreatureId].happyImage;
}
else {
    creature.src = creatureList[profile.creatureId].sadImage;
    endMessage.textContent = 'You made it to the party, but you are too sad to enjoy it.';
    otherCreatureImage.src = creatureList[otherCreatureId].sadImage;
}

if(profile.hat) {
    yourHatDisplay.src = hatInventory[profile.hat].src;
    yourHatDisplay.alt = hatInventory[profile.hat].alt;
}

otherCreatureHatImage.src = hatInventory[3];



pinataImg.addEventListener('click', function () {
    pinataImg.classList.add('pinata-click');
});
