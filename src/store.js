import localLoad from './local-storage.js';
import localSave from './local-save.js';

const hatDisplay = document.getElementById('hats');
const message = document.getElementById('message');

const profile = localLoad('profile');

let hatInventory = [
    {   
        id: 'hat1',
        src: '../assets/fakehat1.png',
        cost: 60,
        happiness: 10
    },

    {   
        id: 'hat2',
        src: '../assets/fakehat2.png',
        cost: 10,
        happiness: 10
    }
];

function hatClicked(index) {
    // check money
    if(hatInventory[index].cost > profile.money) {
        message.textContent = 'You don\'t have enough money to buy this hat. Go back to the game to win more money.';
    }
    else {
        message.textContent = 'Yay! What a great new hat!';
        profile.money -= hatInventory[index].cost;
        profile.hat = index;
        profile.happiness += hatInventory[index].happiness;
        localSave(profile, 'profile');
    }



    // remove hat from store
    // set hat in profile
    //happiness increase
}

for(let i = 0; i < hatInventory.length; i++) {
    const hatSpan = document.createElement('span');
    const hatImage = document.createElement('img');
    hatImage.src = hatInventory[i].src;
    hatSpan.classList.add('hat-span');
    hatSpan.appendChild(hatImage);
    hatDisplay.appendChild(hatSpan);
    hatSpan.addEventListener('click', function(event) {
        hatClicked(i);
    });
}
