// Author: Jayant Arora
// Sign up client side controller 

function signup() {
	var fname = document.getElementById("signup1").value;
	var lname = document.getElementById("signup2").value;
	var email = document.getElementById("signup5").value;
	var phone_number = document.getElementById("signup3").value;
	var zip_code = document.getElementById("signup4").value;
	// This is temporary. Will be removed after implementation of CAS protocol.
	var password = document.getElementById("signup6").value;
	var confirm_pass = document.getElementById("signup7").value;
	var url = "/signup";
	var http = new XMLHttpRequest();
	var params = "fname="+fname+"&lname="+lname+"&email="+email+"&password="+password+"&confirm_pass="+confirm_pass+"&phone_number="+phone_number+"&zip="+zip_code;
	if(typeof(email.slice(0, 5)) == "string" && typeof(Number(email.slice(6))) == "number" && email.length == 8){
		if(password === confirm_pass){
			http.open("POST", url, true);
			http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http.onreadystatechange = function() { 
				if(this.readyState == 4 && this.status == 200){
					console.log(http.responseText);
					console.log(params);
					document.getElementById("signupButton2").innerHTML = "Signup successful. Now you can go to login";
					document.getElementById("signupButton2").style.width = "90%";
					document.getElementById("signupButton2").style.backgroundColor = "green";
				}
				if(this.readyState == 4 && this.status == 404){
					if(http.responseText == "ER_DUP_ENTRY"){
						document.getElementById("signupButton2").innerHTML = "account already exists";
						document.getElementById("signupButton2").style.backgroundColor = "red";
						document.getElementById("signupButton2").style.width = "50%";
					}
					console.log(http.responseText);
				}
			}
			http.send(params);
		}
		else{
			// show error for password not valid or do not match.
			document.getElementById("signup5").style.backgroundColor = "white";
			document.getElementById("signupButton2").innerHTML = "passwords do not match.";
			document.getElementById("signupButton2").style.backgroundColor = "red";
			document.getElementById("signupButton2").style.width = "70%";
			document.getElementById("signup6").style.backgroundColor = "red";
			document.getElementById("signup7").style.backgroundColor = "red";
		}
	}
	else{
		// Show error for email not valid.
		document.getElementById("signupButton2").innerHTML = "username should be of the form: uname001";
		document.getElementById("signupButton2").style.backgroundColor = "red";
		document.getElementById("signupButton2").style.width = "80%";
		document.getElementById("signup5").style.backgroundColor = "red";
	}
}


// Submit signup form on enter key press

function submitSignup(){
	document.getElementById("signup7").onkeypress = function(event){
		if(event.keyCode == 13){
			signup();
		}
		else{
			document.getElementById("signupButton2").innerHTML = "Signup";
		}
	}
}
