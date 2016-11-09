// Author: Jayant Arora
// Description: Function for listing page.

function category(){
	/*
	var select = document.getElementById("Category");
	var links = [{link1: "link1"}, {link1: "link2"}, {link1: "link3"}];
	
	for(var i=0; i<links.length; i++){
		var link2 = links[i];
		console.log(link2);
		document.write(link2.link1.link("#"));
	}
	*/
	var sendObj = []
	var url = "/listing/tags";
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//var select = document.getElementById("Category");
			for(var i=0; i<xhr.response.length; i++){
				//var option = xhr.response[i];
				//var name = option.tagName;
				//document.write(name.link("#"));
				//console.log(xhr.response[i]);
				//console.log(option.tagName, option.tagID.toString());
			}
			sendObj = xhr.response;
			console.log(xhr.response.length);
			addLinks(sendObj);
		}	
	}
	xhr.send(null);

}

function addLinks(object){
	var select = document.getElementById("Category");
	console.log(object);
	
	for(var i = 0; i < object.length; i++){
		console.log(object[i]);
		document.getElementById("Category").innerHTML += object[i].tagName.link(object[i].tagID);
	}
}
