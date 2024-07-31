function validateRegistration() {
    let x = document.getElementById("fname", "lname", "email", "password").value;
    if(x==""){
        alert("You must enter your name"); //ne radi
        return false;
    }
}