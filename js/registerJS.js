//Stores login credentials in localStorage (Very legal and secure)=================================================================================================================
//The code for the counter was from
//https://linuxhint.com/create-simple-click-counter-using-javascript/#:~:text=To%20create%20a%20simple%20click%20counter%20using%20JavaScript%2C%20you%20can,counter%20to%20reset%20the%20count.
function Register(){  
        if (typeof(Storage) !== "undefined") {
        if (localStorage.count) {
                localStorage.count = Number(localStorage.count)+1;
        } else {
                  localStorage.count = 1;
                }
                 num = localStorage.count;
        }

        input1 = document.getElementById("uname").value;
        input2 = document.getElementById("pwd").value;
        input3 = document.getElementById("eml").value;
        
        localStorage.setItem("user" + num, input1);
        localStorage.setItem("pass" + num, input2);
        localStorage.setItem("email" + num, input3);
}
//=================================================================================================================================================================================
