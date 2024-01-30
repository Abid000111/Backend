var item1 = document.getElementById("one");
var item2 = document.getElementById("two");
var item3 = document.getElementById("three");
item1.style.display = "none";
item2.style.display = "none";
item3.style.display = "none";

function activeone() {
	if (item1.style.display == "none") {
		item1.style.display = "block";
	} else {
		item1.style.display = "none";
	}
}
function activetwo() {
	if (item2.style.display == "none") {
		item2.style.display = "block";
	} else {
		item2.style.display = "none";
	}
}
function activethree() {
	if (item3.style.display == "none") {
		item3.style.display = "block";
	} else {
		item3.style.display = "none";
	}
}
