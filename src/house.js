import localLoad from './local-load.js';
import creatureProfile from './profile.js';
import hatInventory from './hat-inventory.js';
import localSave from './local-save.js';

creatureProfile();

const yourHats = localLoad('yourHats');


const hatRack = document.getElementById('hat-rack');
const profile = localLoad('profile');

function hatClick(yourHat) {
    
    profile.hat = yourHat;
    localSave('profile', profile);
    creatureProfile();
    createHatRack();
}

function createHatRack() {
    while(hatRack.firstChild) {
        hatRack.removeChild(hatRack.firstChild);
    }
    for(let i = 0; i < hatInventory.length; i++) {
        const hatSpan = document.createElement('span');
        hatSpan.id = 'hat' + i;
        if(yourHats.includes(i) && !(profile.hat === i)) {
            const hatImage = document.createElement('img');
            hatImage.alt = hatInventory[i].alt;
            hatImage.src = hatInventory[i].src;
            hatSpan.appendChild(hatImage);
            hatSpan.addEventListener('click', 
                function() {
                    hatClick(i);
                });
        }
        hatRack.appendChild(hatSpan);
                
        
    }
}


createHatRack();