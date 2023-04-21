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

        do{
                if(input1 == localStorage.getItem("name" + checker)){

                        if((input2 == localStorage.getItem("pwd" + checker))){

                                if((input3 == localStorage.getItem("eml" + checker))){


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
