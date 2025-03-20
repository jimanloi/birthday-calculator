import { todayAge } from './utils/todayAge.js';

//DOM
const dom = {
    birthdayInput: document.getElementById('birthday'),
    enterButton: document.getElementById('enter-button'),
    display: document.getElementById('display')
};

//Execution

dom.enterButton.addEventListener('click', () => {
    dom.display.innerText = todayAge(dom.birthdayInput);
});
