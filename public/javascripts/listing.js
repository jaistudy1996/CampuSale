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
	}
	console.log(categories);
}

allItems = [];

function viewItems(){
	// Show all items that are in the database 
	// TO-DO: Make page numbers to show all the items. 
	var xhr = new XMLHttpRequest();
	var url = "/listing/items";
	xhr.responseType = "json";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log("REspose:", xhr.response);
			response = xhr.response
			for(var i=0; i < response.length; i++){
				allItems.push(response[i]);
				document.getElementById("items-list").innerHTML += "<li><img src='images/img-1.jpg'/><a href="+"/listing/items/"+
				response[i].itemID+" class='itemLink'>"+"<h3>"+response[i].title+"</h3></a><p>"+response[0].description+"</p></li>";
			}
			allItems.sort(function(a, b){return b.price - a.price});
			console.log(allItems);
		}
	}
	xhr.send(null);
	//var items = document.getElementById("id-items").innerHTML;
}


function sortItems(value){
	// If value is 1 :- Sort lowest to highest
	if(value == 1){
		allItems.sort(function(a, b){return a.price - b.price});
		console.log(allItems);
	}
	// If value is 0 :- sort highest to lowest.
	if(value == 0){
		allItems.sort(function(a, b){return b.price - a.price});
		console.log(allItems);
	}
}
