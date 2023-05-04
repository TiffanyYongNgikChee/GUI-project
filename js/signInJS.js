 function signIn(){

    check = 1;
    count = localStorage.count;


    input1 = document.getElementById("uname").value;
    input2 = document.getElementById("pwd").value;
    input3 = document.getElementById("eml").value;

    detail1 = localStorage.getItem("user", + check);
    detail2 = localStorage.getItem("pass", + check);
    detail3 = localStorage.getItem("email", + check);

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
        check++;

}while(check <= count)
}