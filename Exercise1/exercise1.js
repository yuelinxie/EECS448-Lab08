function Validate(){
    let password_1 = document.querySelector("#EnterPassword").value;
    let password_2 = document.querySelector("#VerifyPassword").value;

    if(password_1.length >= 8){
        if(password_1 != password_2){
            alert("The passwords entered don't match!")
        }
        else{
            alert("The passwords matched!")
        }
    }
    else{
        alert("Password length should be at least 8 characters")
    }
}