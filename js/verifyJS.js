
const e1 = sessionStorage.getItem("p1");
const e2 = sessionStorage.getItem("p2");
const e3 = sessionStorage.getItem("p3");
const del = localStorage.getItem("delivery");
const promC = localStorage.getItem("promoC");
const codeP = localStorage.getItem("pCode");

const fname = localStorage.getItem("fName");
const lname = localStorage.getItem("lName");
const email = localStorage.getItem("email");
const address1 = localStorage.getItem("address1");
const address2 = localStorage.getItem("address2");
const eircode = localStorage.getItem("eircode");
const totalP = localStorage.getItem("totalPrice");

document.getElementById("fullName").innerHTML = "Name: " + fname + " " + lname;
document.getElementById("email").innerHTML = "Email: " + email;
document.getElementById("address1").innerHTML = "Address 1: " + address1;
document.getElementById("address2").innerHTML = "Address 2: " + address2;
document.getElementById("eircode").innerHTML = "Eircode: " + eircode;
document.getElementById("price1").innerHTML = "event1: €" + e1;
document.getElementById("price2").innerHTML = "event2: €" + e2;
document.getElementById("price3").innerHTML = "event3: €" + e3;
if(del > 0){
    document.getElementById("del").innerHTML = "delivery: €" + del;
}
document.getElementById("totalCost").innerHTML = "Total: €" + totalP;