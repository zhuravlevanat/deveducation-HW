'use strict';

const buttons = ['1', '2', '3', '4', '5', '6','7', '8', '9', '0', 
                 '+', '-', '/', '=', '.', 'c'];

const calcBtnsContainer = document.getElementById('calcBtnsContainer');
const calcDisplay = document.getElementById('display');
const bntItemTemplate = document.getElementById('bntItemTemplate').innerHTML;


window.addEventListener('load', onPageLoaded);
calcBtnsContainer.addEventListener('click', onCalcBntContainerClick);

function onPageLoaded() {
  createCalcButtons();
}

function onCalcBntContainerClick(e) {
  const elem = e.target;
  
  if (elem.value === 'c') {
    calcDisplay.value = '0';
  } else if (elem.value === '=') {
    calcDisplay.value = eval(calcDisplay.value);
  } else if (calcDisplay.value === '0') {
    calcDisplay.value = elem.value;
  } else {
    calcDisplay.value += elem.value;
  }
}

function createCalcButtons() {
  buttons.forEach(elem => {
    const buttonElement = bntItemTemplate.replace('{{value}}', elem)
                                          .replace('{{sign}}', elem);                                  
    calcBtnsContainer.innerHTML += buttonElement;
  })
}


        