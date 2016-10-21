// Author: Jayant Arora
// Sign up client side controller 

function signup() {
	var fname = document.getElementById("signup1").value;
	var lname = document.getElementById("signup2").value;
	var email = document.getElementById("signup3").value;
	// This is temporary. Will be removed after implementation of CAS protocol.
	var password = document.getElementById("signup4").value;
	var confirm_pass = document.getElementById("signup5").value;
	var url = "/signup";
	if(typeof(email.slice(0, 5)) == "string" && typeof(email.slice(6) == "number")){
		if(password === confirm_pass){
			var params = "fname="+fname+"&lname="+lname+"&email="+email+"&password="+password;
		}
		else{
			// show error for password not valid or do not match.
		}
	}
	else{
		// Show error for email not valid.
	}
}
