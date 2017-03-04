var listItems 	= document.getElementById("our-list").getElementsByTagName("li");
var ourHeadline = document.getElementById("our-headline");
var ourButton	= document.getElementById("our-button");
var listItem    = document.getElementById("our-list")	;
var counter		= 0;

for ( i = 0 ; i < listItems.length; i++ ){
	listItems[i].addEventListener("click", activateItem);
}

function activateItem(){
	ourHeadline.innerHTML = this.innerHTML;
}

ourButton.addEventListener("click",addNewItem);

function addNewItem(){
	listItem.innerHTML += "<li>Something new "+counter+"</li>";
	counter++;
}