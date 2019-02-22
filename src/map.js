import creatureProfile from './profile.js';
import localLoad from './local-load.js';
import localSave from './local-save.js';
const partyImage = document.getElementById('party');
const stars = document.getElementById('stars');

creatureProfile();

const profile = localLoad('profile');

if(profile.hat === 3) {
    partyImage.classList.remove('unclickable-building');
}

stars.addEventListener('click', function() {
    if(!profile.starClicked) {
        profile.happiness += 2;
        profile.starClicked = true;
    }
    localSave('profile', profile);
    creatureProfile();
});




