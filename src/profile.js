import creatureList from './creatures.js';
import hatInventory from './hat-inventory.js';

function creatureProfile() {
    const creatureImage = document.getElementById('creature-image');
    const creatureName = document.getElementById('creature-name');
    const creatureHappy = document.getElementById('creature-happy');
    const creatureMoney = document.getElementById('creature-money');
    const creatureHat = document.getElementById('your-hat');
    const json = window.localStorage.getItem('profile');
    if(!json) {
        window.location = '../index.html';
    }
    const profile = JSON.parse(json);

    if(!(profile.hat === null)) {
        creatureHat.src = hatInventory[profile.hat].src;
        creatureHat.alt = hatInventory[profile.hat].alt;
    }
    if(profile.happiness > 4) {
        creatureImage.src = creatureList[profile.creatureId].happyImage;
        creatureImage.alt = 'your happy creature';
    }
    else {
        creatureImage.src = creatureList[profile.creatureId].sadImage;
        creatureImage.alt = 'your sad creature';

    }
    creatureName.textContent = profile.name;
    creatureHappy.textContent = profile.happiness;
    creatureMoney.textContent = profile.money;

    if(profile.happiness <= 0) {
        window.location = '/display/death.html';
    }
    if(profile.money < 0) {
        window.location = '/display/debt.html';
    }

}
export default creatureProfile;