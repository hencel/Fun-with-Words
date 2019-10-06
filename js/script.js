const button = document.querySelectorAll('.button');
const buttonClear = document.querySelector('.buttonClear');
let userText = document.querySelector('.userText');
let programText = document.querySelector('.programText');


button[0].addEventListener('click', spell); 
button[1].addEventListener('click', upperCase); 
button[2].addEventListener('click', lowerCase); 
button[3].addEventListener('click', sortLetters); 
buttonClear.addEventListener('click', clear);

function spell(event) {
    event.preventDefault();
    let spelled = '';
    for (let i=0; i<userText.value.length; i++) {
        spelled += userText.value[i] + ', ';
    }
    return programText.textContent = spelled;
}

function upperCase(event) {
    event.preventDefault();
    return programText.textContent = userText.value.toUpperCase();
}
function lowerCase(event) {
    event.preventDefault();
    return programText.textContent = userText.value.toLowerCase();
}
function sortLetters(event) {
    event.preventDefault();
    let sorted = [];
    let temp = userText.value.toLowerCase();
    for (let i=0; i<temp.length; i++) {
        sorted.push(temp[i]);
    }
    return programText.textContent = sorted.sort();;
}
function clear() {
    programText.textContent = '';
    userText.value = '';
}