function validateRegistration() {
    let x = document.forms["myForm"];
    let name = x["fname"].value;
    let surname = x["lname"].value;
    let email = x["email"].value;
    let password = x["password"].value;

    if(name == "" || surname == "" || email == "" || password == ""){
        alert("Make sure you have filled in all the fields.");
        return false;
    }
    else{
        alert("You have successfully subscribed to our newsletter! ")
    }
}

