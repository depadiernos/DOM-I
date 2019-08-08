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
      msTens++;
      divSecondTens.textContent =
        msTens >= 1000 ? msTens.toString().substr(-4, 1) : 0;
      divSecondOnes.textContent =
        msTens >= 100 ? msTens.toString().substr(-3, 1) : 0;
      divMsHundreds.textContent =
        msTens >= 10 ? msTens.toString().substr(-2, 1) : 0;
      divMsTens.textContent = msTens.toString().substr(-1, 1);
      startButton.disabled = true;
      if (msTens == 1000) {
        clearInterval(interval);
        interval = null;
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
