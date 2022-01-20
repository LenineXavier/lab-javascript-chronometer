const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  

}

function printMinutes() {
  // ... your code goes here
  minDec.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()[0]);
  minUni.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes()[1])
  
}

function printSeconds() {
  // ... your code goes here
  secDec.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()[0]);
  secUni.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds()[1])
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(split) {
  // ... your code goes here
  const li = document.createElement("li");
  li.innerText = split;
  splitsElement.appendChild(li);

}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('reset');
  btnLeftElement.classList.toggle('split');
  btnLeftElement.innerText = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
  const split = chronometer.spli();
  printSplit(split);
}

function setStartBtn(Start) {
  // ... your code goes here
  chronometer.start();
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.toggle('reset');
  btnLeftElement.classList.toggle('split');
  btnLeftElement.innerText = 'SPLIT';
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits();
  minDecElement.innerText = "0";
  minUniElement.innerText = "0";
  secDecElement.innerText = "0";
  secUniElement.innerText = "0";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.innerText === "START"){
    setStartBtn()
  }else{
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.innerText === "RESET"){
    setResetBtn();
  }else{
    setSplitBtn();
  }
  

});
