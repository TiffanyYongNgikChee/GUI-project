//Maximum amount of tickets allowed per session
sessionStorage.ticketLimit1 = 4;
sessionStorage.ticketLimit2 = 4;
sessionStorage.ticketLimit3 = 4;
sessionStorage.ticketLimit4 = 4;

//Uncomment lines below to change number of tickets available
localStorage.totalTickets1 = 50;    ticknum1 = localStorage.totalTickets1;
localStorage.totalTickets2 = 50;    ticknum2 = localStorage.totalTickets2;
localStorage.totalTickets3 = 50;    ticknum3 = localStorage.totalTickets3;
localStorage.totalTickets4 = 50;    ticknum4 = localStorage.totalTickets4;
//=================================================================================================================================================================================
var a1 = 0;
var b1 = 0;
var a2 = 0;
var b2 = 0;
var a3 = 0;
var b3 = 0;
var a4 = 0;
var b4 = 0;

//Add tickets to cart (Into Session Storage) Limits a person to be only able to purchase 4 tickets in one session.
sessionStorage.qty1 = 0;
sessionStorage.qty2 = 0;
sessionStorage.qty3 = 0;
sessionStorage.qty4 = 0;

//Shows how many tickets there are currently
document.getElementById("ticketNum1").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + ticknum1 + " tickets left!";
document.getElementById("ticketNum2").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + ticknum2 + " tickets left!";
document.getElementById("ticketNum3").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + ticknum3 + " tickets left!";
document.getElementById("ticketNum4").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + ticknum4 + " tickets left!";

//Once add button is pressed
function add(qty){

//First Event----------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(qty == 1){
    t = localStorage.totalTickets1;

    //Obtains the number of tickets desired to purchase
    num = document.getElementById("ticket1").value;

    //Set a limit to 4 tickets per person
    if(num <= 4){
        y = sessionStorage.ticketLimit1;

        if(num <= y){

            //Checks if there are enough tickets to purchase
            if(num <= t){

                a1 = document.getElementById("ticket1").value;
                
                x = localStorage.totalTickets1;
                
                //Updates current amount of tickets
                localStorage.totalTickets1 = x - a1;
                //Updates current amount of tickets purchasable by one person
                sessionStorage.ticketLimit1 = y - a1;

                b1 += a1 * 1;

                //The quantity of tickets purchased is then added to session storage
                sessionStorage.qty1 = b1;

                //Shows how many tickets there are left
                document.getElementById("ticketNum1").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + (x - num) + " tickets left!";

            }
            //If there are no more tickets left
            else{
                alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
            }
        }
        //if customer tries to buys more than 4 tickets
        else{
            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }  
    //If customer tries to buy more than 4 tickets at once
    else{

        alert("Sorry, the maximum amount of tickets to purchase is 4");
    }
}
//Second Event---------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(qty == 2){
    t = localStorage.totalTickets2;

    //Obtains the number of tickets desired to purchase
    num = document.getElementById("ticket2").value;

    //Set a limit to 4 tickets per person
    if(num <= 4){
        y = sessionStorage.ticketLimit2;

        if(num <= y){

            //Checks if there are enough tickets to purchase
            if(num <= t){

                a2 = document.getElementById("ticket2").value;
                
                x = localStorage.totalTickets2;
                
                //Updates current amount of tickets
                localStorage.totalTickets2 = x - a2;
                //Updates current amount of tickets purchasable by one person
                sessionStorage.ticketLimit2 = y - a2;

                b2 += a2 * 1;

                //The quantity of tickets purchased is then added to session storage
                sessionStorage.qty2 = b2;

                //Shows how many tickets there are left
                document.getElementById("ticketNum2").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + (x - num) + " tickets left!";

            }
            //If there are no more tickets left
            else{
                alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
            }
        }
        //if customer tries to buys more than 4 tickets
        else{
            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }  
    //If customer tries to buy more than 4 tickets at once
    else{

        alert("Sorry, the maximum amount of tickets to purchase is 4");
    }
}
//Third Event----------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(qty == 3){
    t = localStorage.totalTickets3;

    //Obtains the number of tickets desired to purchase
    num = document.getElementById("ticket3").value;

    //Set a limit to 4 tickets per person
    if(num <= 4){
        y = sessionStorage.ticketLimit3;

        if(num <= y){

            //Checks if there are enough tickets to purchase
            if(num <= t){

                a3 = document.getElementById("ticket3").value;
                
                x = localStorage.totalTickets3;
                
                //Updates current amount of tickets
                localStorage.totalTickets3 = x - a3;
                //Updates current amount of tickets purchasable by one person
                sessionStorage.ticketLimit3 = y - a3;

                b3 += a3 * 1;

                //The quantity of tickets purchased is then added to session storage
                sessionStorage.qty3 = b3;

                //Shows how many tickets there are left
                document.getElementById("ticketNum3").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + (x - num) + " tickets left!";

            }
            //If there are no more tickets left
            else{
                alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
            }
        }
        //if customer tries to buys more than 4 tickets
        else{
            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }  
    //If customer tries to buy more than 4 tickets at once
    else{

        alert("Sorry, the maximum amount of tickets to purchase is 4");
    }
}

//Fourth Event---------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(qty == 4){
    t = localStorage.totalTickets4;

    //Obtains the number of tickets desired to purchase
    num = document.getElementById("ticket4").value;

    //Set a limit to 4 tickets per person
    if(num <= 4){
        y = sessionStorage.ticketLimit4;

        if(num <= y){

            //Checks if there are enough tickets to purchase
            if(num <= t){

                a4 = document.getElementById("ticket4").value;
                
                x = localStorage.totalTickets4;
                
                //Updates current amount of tickets
                localStorage.totalTickets4 = x - a4;
                //Updates current amount of tickets purchasable by one person
                sessionStorage.ticketLimit4 = y - a4;

                b4 += a4 * 1;

                //The quantity of tickets purchased is then added to session storage
                sessionStorage.qty4 = b4;

                //Shows how many tickets there are left
                document.getElementById("ticketNum4").innerHTML = "&emsp;&emsp;&emsp;&emsp;" + (x - num) + " tickets left!";

            }
            //If there are no more tickets left
            else{
                alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
            }
        }
        //if customer tries to buys more than 4 tickets
        else{
            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }  
    //If customer tries to buy more than 4 tickets at once
    else{

        alert("Sorry, the maximum amount of tickets to purchase is 4");
    }
}
}
//=================================================================================================================================================================================
