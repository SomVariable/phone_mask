import {numbers} from './numbers/index.js';

document.addEventListener("DOMContentLoaded", function () {
    
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');
    
    const getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    const onPhonePaste = function (e) {
        const input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        const pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            const pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        const ukIndexes = ["3"],
              rusIndexes = ["7", "8", "9"],
              polNumbers = ["4"]

        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }
        console.log()
        if (ukIndexes.indexOf(inputNumbersValue[0] )> -1) {
           formattedInputValue = numbers.ukNumbers(inputNumbersValue)
        }else if(rusIndexes.indexOf(inputNumbersValue[0] )> -1){
            formattedInputValue = numbers.russionsNumbers(inputNumbersValue)
        }else if(polNumbers.indexOf(inputNumbersValue[0] )> -1){
            formattedInputValue = numbers.polandNumbers(inputNumbersValue)
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }

        input.value = formattedInputValue;
    }

    const onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        const inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (let phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})