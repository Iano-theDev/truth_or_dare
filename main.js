const truthBtn = document.querySelector('#truthBtn');
const dareBtn = document.querySelector('#dareBtn');
const resetBtn = document.querySelector('#resetBtn');
const respContainer = document.querySelector('#respContainer');
const respContent = document.querySelector('#respContent');


// document.getElementById('#respContainer').style.visibility = 'hidden';
truthBtn.onclick = () => {
    //alert(`your truth challenge is on the way`);
    respContent.textContent = `None rn, sigh!`;
  }

dareBtn.onclick = () => {
    // alert(`your dare is on the way`);
    respContent.textContent = `Hmmm, No dares for you rn!, Enjoy your peace!`;
  }

resetBtn.onlick = () => {
    window.location.reload();
}