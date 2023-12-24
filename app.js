let count = 0;
const num = document.getElementById('num');
const decrBtn = document.getElementById('decrease');
const incBtn = document.getElementById('increase');
const resBtn = document.getElementById('reset');
const btnDiv = document.getElementById('button-div');

const btnColor = number => { 
    if(number > 0) return 'green';
    else if(number < 0) return 'red';
    else return 'gray';
}

btnDiv.addEventListener('click', e=>{
    if(e.target.matches("#increase, #increase *")) count++;
    else if(e.target.matches("#decrease, #decrease *")) count--; 
    else if(e.target.matches("#reset, #reset *")) count = 0;
    num.textContent = count;
    num.style.color = btnColor(count);
})



