//Stores login credentials in localStorage (Very legal and secure)=================================================================================================================
//Registering
localStorage.counter = 0;
var count = localStorage.counter;

function Register(){  
        input1 = document.getElementById("uname").value;
        input2 = document.getElementById("pwd").value;
        input3 = document.getElementById("eml").value;
        
        localStorage.setItem("name" + count, input1);
        localStorage.setItem("pass" + count, input2);
        localStorage.setItem("email" + count, input3);

        count++;
        localStorage.counter = count;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Signing in
function SignIn(){
        localStorage.checker = 0;

        input1 = document.getElementById("uname").value;
        input2 = document.getElementById("pwd").value;
        input3 = document.getElementById("eml").value;

        detail1 = localStorage.getElementById("uname").value;
        detail2 = localStorage.getElementById("pwd").value;
        detail3 = localStorage.getElementById("eml").value;

        do{
                if(input1 == detail1){

                        if(input2 == detail2){

                                if(input3 == detail3){


                                }
                                else{
                                        alert("Incorrect credentials entered! please try again.");
                                }
                        }
                        else{
                                alert("Incorrect credentials entered! please try again.");
                        }

                               
                }
                else{
                        alert("Incorrect credentials entered! please try again.");
                }

                checker++;

        }while(checker <= count)
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
