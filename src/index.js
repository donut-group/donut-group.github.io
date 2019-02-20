import creatureList from './creatures.js';
import localSave from './local-save.js';
const form = document.getElementById('name-form');

let randomCreature = Math.floor(Math.random() * creatureList.length);
console.log(randomCreature);
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // const allHats = [

    // ];
    const profile = { 
        name: formData.get('name'),
        creatureId: randomCreature,
        happiness: 5,
        money: 1000,
        hat: null
        
    };
    
    localSave('profile', profile);
    


    window.location = '/display/map.html';
   
});


