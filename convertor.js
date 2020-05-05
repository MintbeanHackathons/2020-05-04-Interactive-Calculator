        const hexInput = document.querySelector('#hexInput');
        const textOutput = document.querySelector('#textOutput');
        const errorMsg = document.querySelector('#errorMsg');
        const hexInputValidation = new RegExp(/^([0-9A-Fa-f]{2})+$/g);

        function convertHex(hexInput) {
            errorMsg.innerHTML = "";
            if(hexInput.match(hexInputValidation)){
            let hex = hexInput.toString();
            console.log(hex)
            let str = '';
            for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {

                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            textOutput.innerHTML = str;
            }
            else
            {
            errorMsg.innerHTML ="The entered value is not Hex value"
            }
        }

        function convertText(textInput) {
            const map = Array.prototype.map;
            const arr1 = map.call(textInput, letter => letter.charCodeAt(0).toString(16));
            hexOutput.innerHTML = arr1.join('').toUpperCase();
            return arr1.join('');
        }