const truthBtn = document.querySelector('#truthBtn');
const dareBtn = document.querySelector('#dareBtn');
const respContainer = document.querySelector('#respContainer');
const respContent = document.querySelector('#respContent');


// document.getElementById('#respContainer').style.visibility = 'hidden';
truthBtn.onclick = () => {
    alert(`your truth challenge is on the way`);
    respContent.textContent = `Most Embarasing moment!`;
  }

  dareBtn.onclick = () => {
    alert(`your dare is on the way`);
    respContent.textContent = `You have to dance on the table!`;
  }