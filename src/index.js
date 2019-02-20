import creatureList from './creatures.js';
import localSave from './local-save.js';
const form = document.getElementById('name-form');
const dream = document.getElementById('dream');

let randomCreature = Math.floor(Math.random() * creatureList.length);
console.log(randomCreature);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const profile = { 
        name: formData.get('name'),
        creatureId: randomCreature,
        happiness: 5,
        money: 1000,
        hat: null
        
    };
    
    localSave('profile', profile);

    
    dream.src = '../assets/dream-cloud-burst.gif';

    setTimeout(function(){ window.location = '/display/map.html'; }, 4150);

    //possible stretch location
});
   
