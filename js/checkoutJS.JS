//=================================================================================================================================================================================
//The code to check whether the checkbox was checked taken and altered from https://linuxhint.com/checkbox-onclick-event-in-javascript/

//If the checkbox is checked a localStorage will be created with the value of 3 for delivery charge if it is unchecked value will be set to 0
function checkClick(){
     var checkbox = document.getElementById('checkbox');
     if (checkbox.checked == true)
     {
      localStorage.setItem("delivery", 3);
     }
     else if(checkbox.checked == false)
     {
        localStorage.setItem("delivery", 0);
     }
}

//Once the submit button is clicked
function checkout(){
    //Gets all the data entered and puts data into localStorage for later use
    input1 = document.getElementById("fname").value;
    input2 = document.getElementById("lname").value;
    input3 = document.getElementById("email").value;
    input4 = document.getElementById("address1").value;
    input5 = document.getElementById("address2").value;
    input6 = document.getElementById("eircode").value;
    input7 = document.getElementById("promo").value;

    localStorage.setItem("fName", input1);
    localStorage.setItem("lName", input2);
    localStorage.setItem("email", input3);
    localStorage.setItem("address1", input4);
    localStorage.setItem("address2", input5);
    localStorage.setItem("eircode", input6);
    
    localStorage.pCode = input7;

const del = localStorage.getItem("delivery");

//Turns the ticket quantity into prices
price1 = 79.99 * sessionStorage.qty1;
price2 = 49.99 * sessionStorage.qty2;
price3 = 49.99 * sessionStorage.qty3;
price4 = 109.99 * sessionStorage.qty4;

//Stores those prices into sessionStorage
sessionStorage.setItem("p1", price1);
sessionStorage.setItem("p2", price2);
sessionStorage.setItem("p3", price3);
sessionStorage.setItem("p4", price4);

//Gets the total price of everything
TotalP = price1 + price2 + price3 + price4 + del * 1;

//Stores the total into localStorage
localStorage.setItem("totalPrice", TotalP)
}
//=================================================================================================================================================================================