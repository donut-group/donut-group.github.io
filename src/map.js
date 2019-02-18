import creatureList from './creatures.js';

const creatureImage = document.getElementById('creature-image');
const creatureName = document.getElementById('creature-name');
const creatureHappy = document.getElementById('creature-happy');
const creatureMoney = document.getElementById('creature-money');

const json = window.localStorage.getItem('profile');
if(!json) {
    window.location = '../index.html';
}
const profile = JSON.parse(json);
creatureImage.src = creatureList[profile.creatureId];
console.log(creatureImage.src);
console.log(profile.creatureId);
creatureName.textContent = profile.name;
creatureHappy.textContent = profile.happinessLevel;
creatureMoney.textContent = profile.money;
