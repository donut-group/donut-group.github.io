import localLoad from './local-load.js';
import creatureList from './creatures.js';

const creature = document.getElementById('creature-image');
const sadMessage = document.getElementById('sad-message');
const profile = localLoad('profile');
const unhappyMessage = ['You have no more happiness in you.', 'Everything is sad and dark.', 'You are so very sad.', 'All your happiness is gone.', 'Nothing makes you smile anymore.'];

let randomSadMessage = unhappyMessage[Math.floor(Math.random() * unhappyMessage.length)];


sadMessage.textContent = randomSadMessage;

creature.src = creatureList[profile.creatureId].sadImage;




