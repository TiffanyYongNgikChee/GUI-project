//Maximum amount of tickets allowed per session
sessionStorage.ticketLimit1 = 4;
sessionStorage.ticketLimit2 = 4;
sessionStorage.ticketLimit3 = 4;

//Uncomment lines below to change number of tickets available
//localStorage.totalTickets1 = 50;
//localStorage.totalTickets2 = 50;
//localStorage.totalTickets3 = 50;
//=================================================================================================================================================================================
//Add tickets to cart (Into Session Storage) Limits a person to be only able to purchase 4 tickets in one session.
function add(qty){

//First Event----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if(qty == 1){
        t = localStorage.totalTickets1;

        num = document.getElementById("ticket1").value;

        if(num <= 4){
            y = sessionStorage.ticketLimit1;

            if(num <= y){

                if(num <= t){
                    
                    sessionStorage.qty1 = document.getElementById("ticket1").value;
                    x = localStorage.totalTickets1;
        
                    localStorage.totalTickets1 = x - sessionStorage.qty1;
                    sessionStorage.ticketLimit1 = y - sessionStorage.qty1;
                }
                else{
                    alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
                }
            }
            else{
                alert("Sorry, the maximum amount of tickets to purchase is 4");
            }
        }

        else{

            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }

//Second Event---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if(qty == 2){
        t = localStorage.totalTickets2;

        num = document.getElementById("ticket2").value;

        if(num <= 4){
            y = sessionStorage.ticketLimit2;

            if(num <= y){

                if(num <= t){
                    
                    sessionStorage.qty2 = document.getElementById("ticket2").value;
                    x = localStorage.totalTickets2;
        
                    localStorage.totalTickets2 = x - sessionStorage.qty2;
                    sessionStorage.ticketLimit2 = y - sessionStorage.qty2;
                }
                else{
                    alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
                }
            }
            else{
                alert("Sorry, the maximum amount of tickets to purchase is 4");
            }
        }

        else{

            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }

//Third Event----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if(qty == 3){
        t = localStorage.totalTickets3;

        num = document.getElementById("ticket3").value;

        if(num <= 4){
            y = sessionStorage.ticketLimit3;

            if(num <= y){

                if(num <= t){
                    
                    sessionStorage.qty3 = document.getElementById("ticket3").value;
                    x = localStorage.totalTickets3;
        
                    localStorage.totalTickets3 = x - sessionStorage.qty3;
                    sessionStorage.ticketLimit3 = y - sessionStorage.qty3;
                }
                else{
                    alert("Sorry, there are not enough tickets available at the moment. There are " + (x - num) + " tickets left.");
                }
            }
            else{
                alert("Sorry, the maximum amount of tickets to purchase is 4");
            }
        }

        else{

            alert("Sorry, the maximum amount of tickets to purchase is 4");
        }
    }
}
//=================================================================================================================================================================================
