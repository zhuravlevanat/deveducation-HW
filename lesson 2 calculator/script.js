'use strict';

const buttons = ['0','1', '2', '3', '4', '5', '6','7', '8', '9', '.',
                 '+', '-', '*', '/', '=', '←', 'c'];

const calcBtnsContainer = document.getElementById('calcBtnsContainer');
const calcDisplay = document.getElementById('display');
const bntItemTemplate = document.getElementById('bntItemTemplate').innerHTML;
let inputs = ["","",""];
let values = [];


window.addEventListener('load', onPageLoaded);
calcBtnsContainer.addEventListener('click', onCalcBntContainerClick);

function onPageLoaded() {
  createCalcButtons();
}

function onCalcBntContainerClick(e) {
  const elem = e.target;
  const id = elem.dataset.id;

  switch(true) {
    case (id >= 0 && id <= 11): 
      values.push(elem.value);
      displayData();
    break;
    case (id >= 12 && id < 16): 
      updateData(values.join(""));
      updateData(elem.value);
      values = [];
      displayData();
    break;
    case (id == 16): 
      updateData(values.join(""));
      values = [];
      calc();
    break;
    case (id == 17): 
      deleteData();
      displayData();
    break;
    case (id == 18): 
      clearData();
    break;
  }  
}

function createCalcButtons() {
  buttons.forEach((elem, index) => {
    const buttonElement = bntItemTemplate.replace('{{value}}', elem)
                                          .replace('{{sign}}', elem)
                                          .replace('{{id}}', index+1);                                  
    calcBtnsContainer.innerHTML += buttonElement;
  })
}

const addNumbers = (firstNum, secondNum) => firstNum + secondNum;
const multNumbers = (firstNum, secondNum) => firstNum * secondNum;
const subsNumbers = (firstNum, secondNum) => firstNum - secondNum;
const divNumbers = (firstNum, secondNum) => firstNum / secondNum;

const calc = () => {
  switch (inputs[1]) {
    case "+": 
      const sum = addNumbers(parseFloat(inputs[0]), parseFloat(inputs[2]));
      clearData();	
      values.push(sum);
    break;
    case "-": 
      const diff = subsNumbers(parseFloat(inputs[0]), parseFloat(inputs[2]));
      clearData();	
      values.push(diff)
    break;
    case "*": 
      const mult = multNumbers(parseFloat(inputs[0]), parseFloat(inputs[2]));
      clearData();	
      values.push(mult);
    break;
    case "/": 
      const div = divNumbers(parseFloat(inputs[0]), parseFloat(inputs[2]));
      clearData();
      values.push(div);
    break;
  }  
	displayData();
}

const updateData = (value) => {
	inputs.push(value);
	inputs.shift();
}
const clearData = () => {
	inputs = ["","",""];
	values = [];
	calcDisplay.value ="";
}
const deleteData = () => {
  if (values.length > 0) {
    values.pop();
  } 
}
const displayData = () => {
	calcDisplay.value= inputs.join(" ") + " " + values.join("");
}





        