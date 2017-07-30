console.log("Scripts works!");

(function(){



// ================== SCROLLS ============

// scrolldown when pushing the headers down icon 
	var scroll = document.getElementsByClassName("scroll");
	console.log(scroll);

	scroll[0].addEventListener("click", function(){
		document.getElementById("about")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[1].addEventListener("click", function(){
		var about = document.getElementById("projects")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[2].addEventListener("click", function(){
		var about = document.getElementById("skills")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[3].addEventListener("click", function(){
		var about = document.getElementById("contact")
		.scrollIntoView({behavior: "smooth", block: "start"});
	})

	document.getElementById("down-arrow").addEventListener("click",function(){
		var about = document.getElementById("about");
		about.scrollIntoView({behavior: "smooth", block: "start"});
	});


//*****************************************














})();
