import creatureProfile from './profile.js';
import localLoad from './local-load.js';
import localSave from './local-save.js';
const partyImage = document.getElementById('party');
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');

creatureProfile();

const profile = localLoad('profile');

if(profile.hat === 3) {
    partyImage.classList.remove('unclickable-building');
}

stars.addEventListener('click', function() {
    if(!profile.starClicked) {
        //happiness gain should go here
        profile.money += 1000;
        profile.starClicked = true;
    }
    stars.classList.add('shooting-star');
    localSave('profile', profile);
    creatureProfile();
});

moon.addEventListener('click', function() {
    if(!profile.moonClicked) {
        profile.money = 5;
        profile.moonClicked = true;
    }
    localSave('profile', profile);
    creatureProfile();
});




