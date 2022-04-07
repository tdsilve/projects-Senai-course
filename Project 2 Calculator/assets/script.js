const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-all-clear]');
const previousDisplay = document.querySelector('[data-previous-display]');
const currentDisplay = document.querySelector('[data-current-display]');
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
})


class Calculator{
  constructor(prev, current){
    this.current = current;
    this.prev = prev;
    this.clear();
  }

  clear(){
    this.current.value = '';
    this.prev.value = '';
    this.operator = undefined;
  }

  appendNumber(number){

    // Avoid user inser a lot of dots on display. That's why it checks if number is a dot and if the display already contains a dot.
    if (number === '.' && this.current.value.includes('.')){
      return;
    }
    this.current.value += number;
    console.log(this.current.value);
  }

  chooseOperator(operator){
    if (this.operator === '') return;
    if (this.prev.value !== ''){
      this.compute()
    }
    this.operator = operator;
    // Change the previous display - which is the upper display and clear the lower display
    this.prev.value = this.current.value;
    this.current.value = '';


  }

  compute(){
    let computation;
    const prev = parseFloat(this.prev.value);
    const current = parseFloat(this.current.value);
    if(isNaN(prev) || isNaN(current)) return;
    switch (this.operator){
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '/':
        computation = prev / current;
        break;
      case '*':
        computation = prev * current;
        break;
      default:
        return;
    }
    this.current.value = computation;
    this.operator = undefined;
    this.prev.value = '';
  }

  updateDisplay(){
   
      this.current.value = this.current.value;
      this.prev.value = this.prev.value;
      //Check if the user press an operator instead of a number in order to proceed with the calculation
      
  }

  delete(){
    this.current.value = this.current.value.slice(0, -1);
  }
}

const calculator = new Calculator(previousDisplay, currentDisplay);

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    calculator.appendNumber(number.textContent);
  })
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
      calculator.chooseOperator(operator.value);
  })
})

allClear.addEventListener('click', () => {
  calculator.clear();
})

equals.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
  calculator.delete();
})
