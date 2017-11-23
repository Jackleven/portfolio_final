"use strict";
jQuery(document).ready(function() {
	console.log("ready!");
	TweenMax.fromTo("#show_head", 2, {
		y: -12,
		color: "rgba(78, 0, 255, 0)",
		ease: Power0.easeNone
	}, {
		y: 0,
		color: "#000000",
		ease: Power2.easeOut
	});
	var show_header = document.getElementById("show_head");
	if ($(window).width() <= 768) {
		show_header.innerHTML = "MY SHOW REEL";
		console.log("PORT working");
	} else {
		show_header.innerHTML = "HAVE A LOOK AT MY SHOW REEL";
	}
	$(window).resize(function() {
		if ($(window).width() <= 768) {
			show_header.innerHTML = "MY SHOW REEL";
			console.log("PORT working");
		} else {
			show_header.innerHTML = "HAVE A LOOK AT MY SHOW REEL";
		}
	});
});