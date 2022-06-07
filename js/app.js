const ac = document.querySelector('.ac');
const plusMinus = document.querySelector('.plus-minus');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiplication = document.querySelector('.multiplication');
const minus = document.querySelector('.minus');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const dott = document.querySelector('.dott');
const equal = document.querySelector('.equal');
const displayedResult = document.querySelector('.result');

let currentNumber = '';
let previousNumber = '';
let operation = '';
displayedResult.textContent = '0';

const selectAllNumbers = Array.from(document.querySelectorAll('.number'));

selectAllNumbers.forEach( button => {
    button.addEventListener('click', () => {
        if (currentNumber.includes('.') && button.textContent == '.') {
            return
        }
        else {
            currentNumber = currentNumber.toString() + button.textContent.toString();
            appendNumber();
        }      
    })
} );

function clearEverything() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    displayedResult.textContent = '0';
}

function appendNumber() {
    displayedResult.textContent = currentNumber.toString();

}

ac.addEventListener('click', clearEverything);