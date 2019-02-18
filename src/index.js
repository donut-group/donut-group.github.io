import creatureList from './creatures.js';

const form = document.getElementById('name-form');

let randomCreature = Math.floor(Math.random() * creatureList.length);
console.log(randomCreature);
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const profile = { 
        name: formData.get('name'),
        creatureId: randomCreature,
        happinessLevel: 0,
        money: 0,
        hat: null
    };

    

    const serialize = JSON.stringify(profile);

    window.localStorage.setItem('profile', serialize);

    window.location = '/display/map.html';
   
});


