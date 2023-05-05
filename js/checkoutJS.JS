//=================================================================================================================================================================================
//https://linuxhint.com/checkbox-onclick-event-in-javascript/
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

function checkout(){
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

price1 = 79.99 * sessionStorage.qty1;
price2 = 49.99 * sessionStorage.qty2;
price3 = 49.99 * sessionStorage.qty3;

sessionStorage.setItem("p1", price1);
sessionStorage.setItem("p2", price2);
sessionStorage.setItem("p3", price3);

TotalP = price1 + price2 + price3 + del * 1;

localStorage.setItem("totalPrice", TotalP)
}
//=================================================================================================================================================================================