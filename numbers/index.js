const ukNumbers = (inputNumbersValue) => {
    let formattedInputValue = '';
    
    const firstSymbols = inputNumbersValue[0];
    formattedInputValue =  firstSymbols + "8";
        
    if (inputNumbersValue.length > 2) {
        formattedInputValue += '(' + inputNumbersValue.substring(2, 5);
    }
    if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(5, 8);
    }
    if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
    }
    if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(10, 12);
    }
    
    return formattedInputValue
}
const russionsNumbers = (inputNumbersValue) => {
    let formattedInputValue = ''

    const firstSymbols = inputNumbersValue[0];
    formattedInputValue =  firstSymbols + " ";
        
    if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
    
    return formattedInputValue
}

const polandNumbers = (inputNumbersValue) => {
    let formattedInputValue = ''
    const firstSymbols = inputNumbersValue[0];
    formattedInputValue =  '+' + firstSymbols + "8 ";
    formattedInputValue += inputNumbersValue.substring(2, 16)    
    return formattedInputValue
}

export const numbers = {
    ukNumbers,
    russionsNumbers,
    polandNumbers
}

