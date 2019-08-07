// Selectors
let digits = document.querySelector(".digits");
let divSecondTens = document.querySelector("#secondTens");
let divSecondOnes = document.querySelector("#secondOnes");
let divColon = document.querySelector("#colon");
let divMsHundreds = document.querySelector("#msHundreds");
let divMsTens = document.querySelector("#msTens");

// Counter Variables
let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

if (divMsTens.textContent != msTens) {
  divSecondTens.textContent = secondTens;
  divSecondOnes.textContent = secondOnes;
  divMsHundreds.textContent = msHundreds;
  divMsTens.textContent = msTens;
}

// Counter function
let interval = null

function counter() {
  if (interval === null) {
    interval = setInterval(() => {
    if (msTens < 9) {
      msTens++;
    } else {
      msTens = 0;
      if (msHundreds < 9) {
        msHundreds++;
      } else {
        msHundreds = 0;
        if (secondOnes < 9) {
          secondOnes++;
        } else {
          secondOnes = 0;
          if (secondTens < 1) {
            secondTens++;
            clearInterval(interval);
            interval = null;
          }
        }
      }
    }

    divSecondTens.textContent = secondTens;
    divSecondOnes.textContent = secondOnes;
    divMsHundreds.textContent = msHundreds;
    divMsTens.textContent = msTens;
  }, 10);
}}

// Add Start button

let startButton = document.createElement('button')
let br = document.createElement('br')
startButton.textContent = 'Start 10 Second Timer'
startButton.style.cssText = "width:100%;"
startButton.onclick = counter
digits.appendChild(br)
digits.appendChild(startButton)