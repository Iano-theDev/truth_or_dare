const truthBtn = document.querySelector('#truthBtn');
const dareBtn = document.querySelector('#dareBtn');
const respContainer = document.querySelector('#respContainer');
const respContent = document.querySelector('#respContent');

truthBtn.onclick = () => {
    const name = prompt('What\'s your name?');
    alert(`Hello ${name}, here's your truth challenge!`);
    respContent.textContent = "what was your most embarasing moment?";
}