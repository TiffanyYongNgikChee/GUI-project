//Code was written Wilson Song

//This code was made using https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
//Once customer clicks subscribe a random 5 character code is generated
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
        //Code is then stored into localStorage
        localStorage.setItem("promoC", makeid(5));
        
        //Tells you what your promo code is
        x = localStorage.getItem("promoC");
          
        alert("Your Promo code is " + x);
    }
