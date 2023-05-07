//Code was written Wilson Song

//Assigning sessionStorage prices into variables
const e1 = sessionStorage.getItem("p1");
const e2 = sessionStorage.getItem("p2");
const e3 = sessionStorage.getItem("p3");
const e4 = sessionStorage.getItem("p4");
const del = localStorage.getItem("delivery");
const rCode = localStorage.getItem("promoC");
const fCode = localStorage.getItem("pCode");

//Assigning shipping details into variables
const fname = localStorage.getItem("fName");
const lname = localStorage.getItem("lName");
const email = localStorage.getItem("email");
const address1 = localStorage.getItem("address1");
const address2 = localStorage.getItem("address2");
const eircode = localStorage.getItem("eircode");
totalP = localStorage.getItem("totalPrice");

//Displaying all the information on the page
document.getElementById("fullName").innerHTML = "Name: " + fname + " " + lname;
document.getElementById("email").innerHTML = "Email: " + email;
document.getElementById("address1").innerHTML = "Address 1: " + address1;
document.getElementById("address2").innerHTML = "Address 2: " + address2;
document.getElementById("eircode").innerHTML = "Eircode: " + eircode;
document.getElementById("price1").innerHTML = "Event1: €" + e1;
document.getElementById("price2").innerHTML = "Event2: €" + e2;
document.getElementById("price3").innerHTML = "Event3: €" + e3;
document.getElementById("price4").innerHTML = "Event4: €" + e4;

//If promo code entered matches promo code given
if(fCode == rCode){

    //Makes sure if there is no delivery charge this text won't appear on the website
    if(del > 0){
        //Shows delivery charge
        document.getElementById("del").innerHTML = "delivery: €" + del;
    }
    //Calculated the reduced the price and rounded to 2 decimal places
    reduce = (totalP * 0.1).toFixed(2);

    //Placing the reduction number into a sessionStorage
    sessionStorage.setItem("reduce", reduce);

    //Assigning that back into a variable (if I had only used the reduce variable, on the website it would display as NaN)
    red = sessionStorage.getItem("reduce");

    //Displaying the total price, then the reduction and also the new reduced total price rounded to 2 decimal places
    document.getElementById("del").innerHTML ="Total: €" + totalP + "<br>Promo code: -€" + red;
    document.getElementById("totalCost").innerHTML = "New Total: €" + (totalP * 0.9).toFixed(2);

    //Deletes the promo code so it is no longer valid
    localStorage.removeItem("promoC")
}
//If the promo code does not match it would only display the normal price without any reductioni 
else if(fCode !== rCode){
    if(del > 0){
        document.getElementById("del").innerHTML = "delivery: €" + del;
    }

    document.getElementById("totalCost").innerHTML = "Total: €" + totalP;
}