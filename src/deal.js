const paragraphOne = document.getElementById('one');
const paragraphTwo = document.getElementById('two');
const paragraphThree = document.getElementById('three');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const dealLink = document.getElementById('deal-link');
const skipTutorial = document.getElementById('skip-tutorial');

function clickOne(){
    paragraphOne.classList.add('hidden');
    paragraphTwo.classList.remove('hidden');
    buttonOne.classList.add('hidden');
    buttonTwo.classList.remove('hidden');
}
function clickTwo(){
    paragraphTwo.classList.add('hidden');
    paragraphThree.classList.remove('hidden');
    buttonTwo.classList.add('hidden');
    dealLink.classList.remove('hidden');
    skipTutorial.classList.add('hidden');
}

buttonOne.addEventListener('click', clickOne);
buttonTwo.addEventListener('click', clickTwo);
