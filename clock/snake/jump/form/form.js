function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.lenght<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.Formfill.Email.value=""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Password";
        return false;
    }
    else if(document.Formfill.Username.value.lenght<6){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Password.value.lenght<6){
        document.getElementById("result").innerHTML="Passwordnmust be 6-digits";
        return false;
    }
    else if(document.Formfill.CPassword.value=""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;

    }
}