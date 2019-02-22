const paragraphOne = document.getElementById('one');
const paragraphTwo = document.getElementById('two');
const paragraphThree = document.getElementById('three');
const paragraphFour = document.getElementById('four');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
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
    buttonThree.classList.remove('hidden');
}
function clickThree(){
    paragraphThree.classList.add('hidden');
    paragraphFour.classList.remove('hidden');
    buttonTwo.classList.add('hidden');
    buttonThree.classList.add('hidden');
    dealLink.classList.remove('hidden');
    skipTutorial.classList.add('hidden');
}

buttonOne.addEventListener('click', clickOne);
buttonTwo.addEventListener('click', clickTwo);
buttonThree.addEventListener('click', clickThree);
