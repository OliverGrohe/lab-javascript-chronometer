const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');


// btnLeft --> btn start/btn stop
// startClick()--> class btn start  .elementbyClass .innerTEXT
// stopClick() --> class btn stop

// btnRight --> btn reset/btn split
// resetClick() --> class btn reset  .elementbyClass .innerTEXT
// splitClick()--> class btn split

// to change status of btn, toggle classes?

// when btnLeft stopped --> text STOP; class btn stop
// when btnRight stopped --> text SPLIT; class btn split
// when btnLeft running --> text START; class btn start
// when btnRight running --> text RESET; class btn reset

// call startClick if start-class, call stopClick if stop-class
// call resetClick if reset-class, call splitClick if split-class

// function Time(){} --- value minutes & second






// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printTime() {
  let time = document.getElementById("clock")
  
  
  // twoDigitsNumber(time)
}


function printMinutes() {
  // getMinutes()
}

function printSeconds() {
  // getSeconds()
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // startClick() or setStartBtn()
  // stopClick() or setStopBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // resetClick() or setResetBtn()
  // splitClick() or setSplitBrn()
});





// target elements
// let myElem = document.getElementById('title2')

// grab the html/text value
// myElem.innerHTML = 'Hey I updated it'

// myElem.setAttribute('class', 'myClass')

// add classes
// myElem.classList.add('myClass')

// myElem.classList.add('anotherClass')

