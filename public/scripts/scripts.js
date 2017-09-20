

//IIFE
(function(){



// ================== SCROLLS ============

// scrolldown when pushing the headers down icon 
	var scroll = document.getElementsByClassName("scroll");

	scroll[0].addEventListener("click", function(){
		document.getElementById("about-section")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[1].addEventListener("click", function(){
		document.getElementById("projects-section")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[2].addEventListener("click", function(){
		document.getElementById("skills-section")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});
	scroll[3].addEventListener("click", function(){
		document.getElementById("contact-section")
		.scrollIntoView({behavior: "smooth", block: "start"});
	})

	document.getElementById("down-arrow").addEventListener("click",function(){
		document.getElementById("about-section")
		.scrollIntoView({behavior: "smooth", block: "start"});
	});


//*****************************************














})();
