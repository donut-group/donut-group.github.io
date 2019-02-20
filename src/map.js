import creatureProfile from './profile.js';
import localLoad from './local-load.js';
const partyImage = document.getElementById('party-image');

creatureProfile();

const profile = localLoad('profile');

if(profile.hat === 3) {
    partyImage.classList.remove('hidden');
}



