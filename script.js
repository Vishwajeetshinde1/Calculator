let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let clickSound = new Audio('button-4-214382.mp3');

Array.from(buttons).forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    clickSound.currentTime = 0; 
    clickSound.play();

    let value = e.target.innerHTML;

    if (value === 'Del') {
      string = string.substring(0, string.length - 1);
      display.value = string;

    } else if (value === 'AC') {
      string = '';
      display.value = string;

    } else if (value === '=') {
      let expression = string.replace(/÷/g, '/').replace(/x/g, '*');
      string = eval(expression);
      display.value = string;

    } else {
      string += value;
      display.value = string;
    }
  });
});