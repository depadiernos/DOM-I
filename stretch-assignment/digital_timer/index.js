// Selectors
let digits = document.querySelector(".digits");
let digit = document.querySelectorAll(".digit");
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

// Counter function
let interval = null;

const startCounter = () => {
  digit.forEach(item => (item.style.color = "black"));
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
      startButton.disabled = true;
      if (secondTens == 1) {
        digit.forEach(item => (item.style.color = "red"));
        startButton.disabled = false;
      }
    }, 10);
  }
};

const resetCounter = () => {
  secondTens = 0;
  secondOnes = 0;
  msHundreds = 0;
  msTens = 0;
  divSecondTens.textContent = secondTens;
  divSecondOnes.textContent = secondOnes;
  divMsHundreds.textContent = msHundreds;
  divMsTens.textContent = msTens;
  digit.forEach(item => (item.style.color = "black"));
};

// Add Start and Reset Buttons

let startButton = document.createElement("button");
let resetButton = document.createElement("button");
let br = document.createElement("br");
let br2 = document.createElement("br");
startButton.textContent = "Start Timer";
startButton.style.cssText = "width:100%;";
startButton.onclick = startCounter;
resetButton.textContent = "Reset Timer";
resetButton.style.cssText = "width:100%;";
resetButton.onclick = resetCounter;
digits.appendChild(br);
digits.appendChild(startButton);
digits.appendChild(br2);
digits.appendChild(resetButton);

// Add some styling
