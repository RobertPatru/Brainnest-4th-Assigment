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
const allOperators = document.querySelectorAll('.operator');

let currentNumber = '';
let previousNumber = '';
let operation = '';
displayedResult.textContent = '0';

const selectAllNumbers = Array.from(document.querySelectorAll('.number'));

// ------------------------------------  Activate the "appendNumber" function when the numerical buttons are clicked 
selectAllNumbers.forEach( button => {
    button.addEventListener('click', () => {
        currentNumber.toString();
        if( (typeof(currentNumber)) == "number" ) {
            debugger
        }
        console.log(typeof(currentNumber));
        console.log(currentNumber);
        //if the numer alreadi contains a "." (dott) then don't add another one
        if (currentNumber.includes('.') && button.textContent == '.') {
            return;
        }
        else {
            currentNumber = currentNumber.toString() + button.textContent.toString();
            appendNumber();
        }      
    });
} );

// ------------------------------------  Form the numbers by clicking the numerical buttons   ------------------------------------
function appendNumber() {
    displayedResult.textContent = currentNumber.toString();
}


allOperators.forEach( button => {
    button.addEventListener('click', () => {
        // if you press on an operation before selectin the second number, then no math is done
        if (currentNumber == '') 
            return;

        compute();
     
       operation = button.textContent;
       previousNumber = currentNumber;
       currentNumber = '';
    //    console.log("Operator: " + operation);
    //    console.log("Prev: " + previousNumber);
    //    console.log("Curr: " + currentNumber);
    });
} );

function chooseOperation() {

}

function compute () {
 
    let computation;

    // convert the strings to a number so we can do some math
    let prevNumb = parseFloat(previousNumber);
    let curNumb = parseFloat(currentNumber);

    if (isNaN(prevNumb) || isNaN(curNumb))
        return;

    switch (operation) {
        case '+':
            computation = prevNumb + curNumb;
            break;
        
        case '-':
            computation = prevNumb - curNumb;
            break;
        
        case '*':
            computation = prevNumb * curNumb;
            break;
        
        case '÷':
            computation = prevNumb / curNumb;
            break;

        default:
            return;
    }

    displayedResult.textContent = computation;
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
}

// ------------------------------------  Clears every number an operation  ------------------------------------
function clearEverything() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    displayedResult.textContent = '0';
}

// ------------------------------------  Activate "clearEverything" function when "ac" button is clicked  ------------------------------------
ac.addEventListener('click', clearEverything);


equal.addEventListener('click', button => {
    compute();
});