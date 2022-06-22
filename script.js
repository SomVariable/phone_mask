document.addEventListener("DOMContentLoaded", function () {
    
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');

    const ukRegionCheack = () => {

    }

    const rusRegionCheack = (inputNumbersValue) => {
        let numbersValue = ''
        if (inputNumbersValue == "9") numbersValue = "7" + numbersValue;
        let firstSymbols = (inputNumbersValue == "8") ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (numbersValue.length > 1) {
            formattedInputValue += '(' + numbersValue.substring(1, 4);
        }
        if (numbersValue.length >= 5) {
            formattedInputValue += ') ' + numbersValue.substring(4, 7);
        }
        if (numbersValue.length >= 8) {
            formattedInputValue += '-' + numbersValue.substring(7, 9);
        }
        if (numbersValue.length >= 10) {
            formattedInputValue += '-' + numbersValue.substring(9, 11);
        }
        return inputNumbersValue
    }

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

    const onPhoneInput = function (e) {
        let input = e.target,
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

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            rusRegionCheack(inputNumbersValue[0])
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