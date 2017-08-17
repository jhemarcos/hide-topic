window.onload = function(){
    console.log("page load!");

    var divForum = document.getElementById("forum-portal");
    var tableTds = divForum.getElementsByTagName("a");

    for (var i = 0; i <= tableTds.length; i++) {
    	if(tableTds[i] !== undefined && tableTds[i].innerText) {
    		if(tableTds[i].innerText.trim() == "Apostila de lógica") {
    			tableTds[i].parentNode.parentNode.style.display = "none";
    		}
    	}
    }

};