// Author: Jayant Arora
// Description: Functions for selling overlay

window.onload = function categoryForSell(){
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

function addLinks(object){
	// this funciton adds the category links to the category dropdown menu.
	// When a category is clicked it adds the particular category to the categories array
	// by calling addCat function.
	for(var i = 0; i < object.length; i++){
		//categories.push(object[i].categoryID);
		//var func = "addCat(" + object[i].categoryID + ")";
		console.log(document.getElementById("category"));
		document.getElementById("category").innerHTML += "<option value="+ object[i].categoryID + ">"+object[i].categoryName+"</option>";
		//"<a href='#'>" + object[i].categoryName + "</a>";
	}
}

function logout(){
	document.cookie = "userID" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = "loginName" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
	document.cookie = "userName" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
}
