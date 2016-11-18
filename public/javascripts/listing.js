// Author: Jayant Arora
// Description: Functions for listing page.

function category(){
	// This funcion requests the server to get categories from the
	// server. This funciton does not display them on the webpage. 
	// see addLinks for that
	var sendObj = [];
	var url = "/listing/category";
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
	// this funciton adds the category links to the category dropdown menu.
	// When a category is clicked it adds the particular category to the categories array
	// by calling addCat function.
	for(var i = 0; i < object.length; i++){
		//categories.push(object[i].categoryID);
		var func = "addCat(" + object[i].categoryID + ")";
		document.getElementById("Category").innerHTML += "<a href='#' onclick=" + func + ">" + object[i].categoryName + "</a>";
	}
}

function addCat(catID){
	if(categories.indexOf(catID) != -1){
	
	}
	else{
		categories.push(catID);
		viewItems();
	}
	console.log(categories);
}

function viewItems(){
	var xhr = new XMLHttpRequest();
	var url = "/listing/items/:categoryID";
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
