// Author: Jayant Arora
// Description: Function for listing page.

function category(){
	var sendObj = [];
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

categories = [];

function addLinks(object){
	for(var i = 0; i < object.length; i++){
		//categories.push(object[i].categoryID);
		var func = "addCat(" + object[i].categoryID + ")";
		document.getElementById("Category").innerHTML += "<a href='#' onclick=" + func + ">" + object[i].categoryName + "</a>";
	}
	viewItems();
}

function addCat(catID){
	if(categories.indexOf(catID) != -1){
	
	}
	else{
		categories.push(catID);
	}
	console.log(categories);
}

function viewItems(){
	var xhr = new XMLHttpRequest();
	var url = "/listing/items/"+tags;
	xhr.responseType = "json";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log("REspose:", xhr.response);
		}
	}
	xhr.send(null);
	var items = document.getElementById("id-items").innerHTML;
	
}
