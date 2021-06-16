'use strict';
let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');
let operation = prompt('Enter operation sign'); 
function calculator(firstNumber, secondNumber, operation) {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}
alert(calculator(firstNumber, secondNumber, operation));