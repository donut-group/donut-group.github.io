import localLoad from './local-load.js';
import creatureList from './creatures.js';

const creature = document.getElementById('creature-image');
const debtMessageText = document.getElementById('debt-message');
const profile = localLoad('profile');
const debtMessage = ['You are in debt to the shark... and he\'s getting payback in blood. ', 'You ran out of money but have to pay your debts, so...', 'Sharks get their debts paid one way or another...', '"Munch! Crunch! Munch... well if you can\'t pay me my money, I\'ll just have you for lunch!"'];
let randomDebtMessage = debtMessage[Math.floor(Math.random() * debtMessage.length)];


debtMessageText.textContent = randomDebtMessage;

creature.src = creatureList[profile.creatureId].sadImage;