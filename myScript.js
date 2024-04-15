function calculateResult() {
    let firstTextInput = document.getElementById('txtNo1').value
    let secondTextInput = document.getElementById('txtNo2').value
    let operator = document.getElementById('ddOperator').value
    let result = document.getElementById('result')
    let checkNumber = /^-?\d*\.?\d*$/

    // check that inputs value are not empty or that they are numbers
    // if not error message will appear
    // for number check I used regex
    
    if (firstTextInput !== '' && secondTextInput !== '' && checkNumber.test(firstTextInput) && checkNumber.test(secondTextInput)) {
        if (operator === 'add') {
            result.innerText = `${firstTextInput} + ${secondTextInput} = ${parseFloat(firstTextInput) + parseFloat(secondTextInput)}`
        } else if (operator === 'subtract') {
            result.innerText = `${firstTextInput} - ${secondTextInput} = ${parseFloat(firstTextInput) - parseFloat(secondTextInput)}`
        } else if (operator === 'multiply') {
            result.innerText = `${firstTextInput} * ${secondTextInput} = ${parseFloat(firstTextInput) * parseFloat(secondTextInput)}`
        } else {
            if (parseFloat(secondTextInput) === 0) {
                result.innerText = "You cannot divide by 0. Please choose a different number"
            } else {
                result.innerText = `${firstTextInput} / ${secondTextInput} = ${parseFloat(firstTextInput) / parseFloat(secondTextInput)}`
            }
        }

        // below is an alternative solution with a switch statement doing the same thing
        // switch (operator) {
        //     case 'add':
        //         result.innerText = `${firstTextInput} + ${secondTextInput} = ${parseFloat(firstTextInput) + parseFloat(secondTextInput)}`
        //         break;
        //     case 'subtract':
        //         result.innerText = `${firstTextInput} + ${secondTextInput} = ${parseFloat(firstTextInput) - parseFloat(secondTextInput)}`
        //         break;
        //     case 'multiply':
        //         result.innerText = `${firstTextInput} + ${secondTextInput} = ${parseFloat(firstTextInput) * parseFloat(secondTextInput)}`
        //         break;
        //     case 'divide':
        //         result.innerText = `${firstTextInput} + ${secondTextInput} = ${parseFloat(firstTextInput) / parseFloat(secondTextInput)}`
        // }
    } else {
        result.innerText = "Please fill in both of the above numbers for your calculation. Please use only numbers"
    }
}