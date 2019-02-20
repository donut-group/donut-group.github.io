import creatureList from './creatures.js';
import hatInventory from './hat-inventory.js';

function creatureProfile() {
    const creatureImage = document.getElementById('creature-image');
    const creatureName = document.getElementById('creature-name');
    const creatureHappy = document.getElementById('creature-happy');
    const creatureMoney = document.getElementById('creature-money');
    const creatureHat = document.getElementById('your-hat');
    const partyImage = document.getElementById('party-image');
    const json = window.localStorage.getItem('profile');
    if(!json) {
        window.location = '../index.html';
    }
    const profile = JSON.parse(json);

    if(profile.hat === 2) {
        partyImage.classList.remove('hidden');
    }

    if(!(profile.hat === null)) {
        creatureHat.src = hatInventory[profile.hat].src;
    }

    creatureImage.src = creatureList[profile.creatureId];

    creatureName.textContent = profile.name;
    creatureHappy.textContent = profile.happinessLevel;
    creatureMoney.textContent = profile.money;
}
export default creatureProfile;