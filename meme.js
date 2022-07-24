//create variables to select different html inputs and containers
const picInput = document.querySelector('#picture');
const topInput = document.querySelector('#toptext');
const bottomInput = document.querySelector('#bottext');
const memeContainerSec = document.querySelector('#big-meme-container');
const form = document.querySelector('form');

//create submit button to take input from text inputs and picture input
form.addEventListener('submit', function(e) {
    e.preventDefault();
    createMeme(picInput.value, topInput.value, bottomInput.value);
    picInput.value = '';
    topInput.value = '';
    bottomInput.value = '';
});

//create function to create html elements for every input
function createMeme(pic, top, bot) {
    let memeContainer = document.createElement('div');
    memeContainer.setAttribute('class', 'meme-container');
    let memeImage = document.createElement('img');
    memeImage.setAttribute('src',pic);
    memeImage.width = 500;
    memeImage.setAttribute('alt', 'This meme is supposed to make you laugh!');
    let textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'text-container');
    let memeTopText = document.createElement('div');
    memeTopText.innerText = top;
    let memeBottomText = document.createElement('div');
    memeBottomText.innerText = bot;
    textContainer.append(memeTopText, memeBottomText);
    memeContainer.append(memeImage, textContainer);
    memeContainerSec.append(memeContainer);
}
//create delete function to delete meme picture once clicked
memeContainerSec.addEventListener('click', function(e) {
    const selectedMeme = e.target.parentElement;
    if (selectedMeme.className == 'meme-container') {
        selectedMeme.remove();
    }
});

