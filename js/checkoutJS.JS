//Changing ticket quantity into price and getting the total========================================================================================================================
price1 = 79.99 * sessionStorage.qty1;
price2 = 49.99 * sessionStorage.qty2;
price3 = 49.99 * sessionStorage.qty3;

totalPrice = price1 + price2 + price3;

//Promocode
promocode = sessionStorage.promoC;

iPromocode = getElementById("promoCode").value;

//Shipping costs for physical ticket (change if statement)
if(a == a){
    totalPrice = totalPrice + 3;
}

//verifying promocode and applying offer
if(promocode == iPromocode){
    totalPrice = totalPrice * 0.9;
}

if(totalPrice > 0 ){
    document.getElementById("event1Total").innerHTML = price1;
    document.getElementById("event1Tota2").innerHTML = price2;
    document.getElementById("event1Tota3").innerHTML = price3;
    document.getElementById("totalCost").innerHTML = totalPrice;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
