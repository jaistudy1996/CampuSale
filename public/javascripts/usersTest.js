// Author: Jayant Arora
// Description: Submit form and handle authentication redirects.

function loginform(){
	console.log("what if");
	//var x = document.getElementById("form").submit();
	//console.log("done this");
	//console.log(x);
	var url = "/users";
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var params = "fname="+fname+"&lname="+lname;
	console.log(fname);
	console.log(lname);
	console.log(params);
	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	http.setRequestHeader("Content-type",  "application/x-www-form-urlencoded");
	//http.setRequestHeader("Content-length", params.length);
	//http.setRequestHeader("Connection", close);
	//http.send(params);
	http.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			console.log(http.responseText);
		}
	}
	http.send(params);
	console.log('All done');
	//console.log("My object: %o", http.responseText);
	//console.log(typeof(http.respnseText));
}
