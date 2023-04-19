//Uncomment lines below to change number of tickets available
localStorage.totalTickets1 = 50;
localStorage.totalTickets2 = 50;
localStorage.totalTickets3 = 50;
//===================================================================================================================================================
//Add tickets to cart (Into Session Storage)
function add(qty){
    
    if(qty == 1){
        t = localStorage.totalTickets1;

        if(t > 0){
            num = document.getElementById("ticket1").value;

            if(num <= 4){
                sessionStorage.qty1 = document.getElementById("ticket1").value;
                x = localStorage.totalTickets1;
    
                localStorage.totalTickets1 = x - sessionStorage.qty1;
            }
            else{
                alert("Sorry, maximum amount of tickets to purchase at once is 4.");
            }
        }
        else{
            alert("Sorry, there are no more tickets available at the moment.");
        }
    }

    if(qty == 2){
        t = localStorage.totalTickets2;

        if(t > 0){
            num = document.getElementById("ticket2").value;

            if(num <= 4){
                sessionStorage.qty2 = document.getElementById("ticket2").value;
                x = localStorage.totalTickets2;
    
                localStorage.totalTickets2 = x - sessionStorage.qty2;
            }
            else{
                alert("Sorry, maximum amount of tickets to purchase at once is 4");
            }
        }
        else{
            alert("Sorry, there are no more tickets available at the moment.");
        }
    }

    if(qty == 3){
        t = localStorage.totalTickets3;

        if(t > 0){
            num = document.getElementById("ticket3").value;

            if(num <= 4){
                sessionStorage.qty3 = document.getElementById("ticket3").value;
                x = localStorage.totalTickets3;
    
                localStorage.totalTickets3 = x - sessionStorage.qty3;
            }
            else{
                alert("Sorry, maximum amount of tickets to purchase at once is 4");
            }
        }
        else{
            alert("Sorry, there are no more tickets available at the moment.");
        }
    }
}
//===================================================================================================================================================
