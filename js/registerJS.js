//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

function sub(){
        function makeid(length) {
                let result = '';
                const code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const codeLength = code.length;
                let counter = 0;
                while (counter < length) {
                  result += code.charAt(Math.floor(Math.random() * codeLength));
                  counter += 1;
                }
                return result;
            }   
        localStorage.setItem("promoC", makeid(5));

        x = localStorage.getItem("promoC");

        alert("Your Promo code is " + x);
    }
