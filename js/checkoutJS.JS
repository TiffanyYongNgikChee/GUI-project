//Changing ticket quantity into price and getting the total========================================================================================================================
price1 = 79.99 * sessionStorage.qty1;
price2 = 49.99 * sessionStorage.qty2;
price3 = 49.99 * sessionStorage.qty3;
shipping = 0;

totalPrice = price1 + price2 + price3;

//Promocode
/*==================================================================================
promocode = sessionStorage.promoC;

iPromocode = getElementById("promoCode").value;
*/

//Shipping costs for physical ticket
function physicalTicket(){
    shipping = 3;
    totalPrice = totalPrice + shipping;
}
/*
verifying promocode and applying offer
if(promocode == iPromocode){
    totalPrice = totalPrice * 0.9;
}
==================================================================================*/
if(totalPrice > 0 ){
    if(price1 > 0){
        document.getElementById("price1").innerHTML = "Event 1: " + price1;
    }
    if(price2 > 0){
        document.getElementById("price2").innerHTML = "Event 2: " + price2;
    }
    if(price3 > 0){
        document.getElementById("price3").innerHTML = "Event 3: " + price3;
    }
    document.getElementById("physicalTicket").innerHTML = shipping;
    document.getElementById("totalCost").innerHTML = "Total Price: " + totalPrice;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
