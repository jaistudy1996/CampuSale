// Author: Jayant Arora
// Login JS for client side webpage. 

function login(){
	console.log("hello");
	var username = document.getElementById("uname").value;
	var password = document.getElementById("psw").value;
	var params = "uname="+username+"&psw="+password;
	var url = "/";
	var http = new XMLHttpRequest();
	console.log("login func start");
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.onreadystatechange() = function() {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("loginButton").value = "Login Success";
		}
	}
	http.send(params);	
}

