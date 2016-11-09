// Author: Jayant Arora
// Description: Function for listing page.

function category(){
	var sendObj = []
	var url = "/listing/tags";
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			sendObj = xhr.response;
			addLinks(sendObj);
		}	
	}
	xhr.send(null);

}

function addLinks(object){
	for(var i = 0; i < object.length; i++){
		console.log(object[i]);
		document.getElementById("Category").innerHTML += object[i].tagName.link(object[i].tagID);
	}
}
