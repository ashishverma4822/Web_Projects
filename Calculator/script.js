document.addEventListener('DOMContentLoaded', function () {
  let inputBox = document.getElementById('inputBox');
  let buttons = document.querySelectorAll('button:not(#modeToggleBtn)');

  let string = '';

  buttons.forEach(element => {
      element.addEventListener('click', (b) => {
          if (b.target.innerText == '=') {
              string = String(eval(string));
              inputBox.value = string;
          } else if (b.target.innerText == 'AC') {
              string = '';
              inputBox.value = string;
              inputBox.style.fontSize = '40px';
          } else if (b.target.innerText == 'DEL') {
              string = string.substring(0, string.length - 1);
              inputBox.value = string;
          } else if (b.target.id == 'plusMinus') {
              string = String(-eval(string));
              inputBox.value = string;
          } else {
              string += b.target.innerText;
              inputBox.value = string;
              adjustFontSize();
          }
      });
  });

  const modeToggleBtn = document.getElementById('modeToggleBtn');
  modeToggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('darkmode');
      document.querySelectorAll('.calculator, .display input, button, .oprerator, #eqBtn').forEach(element => {
          element.classList.toggle('darkmode');
      });

      if (document.body.classList.contains('darkmode')) {
          modeToggleBtn.textContent = 'Light Mode';
      } else {
          modeToggleBtn.textContent = 'Dark Mode';
      }
  });

  function adjustFontSize() {
      const maxLength = 10;
      const currentLength = inputBox.value.length;
      if (currentLength > maxLength) {
          inputBox.style.fontSize = '25px';
      } else {
          inputBox.style.fontSize = '40px';
      }
  }
});
