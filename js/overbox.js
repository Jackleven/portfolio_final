"use strict";
jQuery(document).ready(function() {
	$("#contact_hide").hide();
	setTimeout(function() {
		$("#contact_hide").show();
		var objects = ["#bo", "#bo2", "#bo3", "#bo4"];
		var details = ["#box1", "#box2", "#box3", "#box4", "#box5", "#box6"];
		var details_s = ["#sbox1", "#sbox2", "#sbox3", "#sbox4", "#sbox5", "#sbox6"];
		TweenMax.set(".con_heads", {
			y: -12,
			color: "rgba(78, 0, 255, 0)"
		});
		TweenMax.set(".con_heads_bg", {
			y: -12,
			color: "rgba(78, 0, 255, 0)"
		});
		TweenMax.set(".fa", {
			color: "rgba(0, 0, 0, 0)"
		});
		var box = TweenMax.staggerTo(details_s, 2, {
			left: "100%",
			width: "0%",
			delay: 2,
			ease: Sine.easeOut
		}, 0.2);
		TweenMax.staggerFromTo(details, 0.2, {
			x: -200,
			ease: Power0.easeNone
		}, {
			x: 0,
			ease: Circ.easeOut
		}, 0.2);
		TweenMax.staggerFromTo(details, 0.2, {
			opacity: 0
		}, {
			opacity: 100
		}, 0.2);
		TweenMax.pauseAll();
		TweenMax.delayedCall(5, social)
		TweenMax.delayedCall(2.2, go)
		TweenMax.delayedCall(1.2, heads)
		TweenMax.staggerTo(".purple_b_style", 5, {
			strokeDashoffset: 0,
			ease: Power0.easenone
		}, 0.3);

		function go() {
			TweenMax.resumeAll();
		}

		function kill() {
			TweenMax.killAll();
		}

		function heads() {
			TweenMax.fromTo(".con_heads", 2, {
				y: -12,
				color: "rgba(78, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				y: 0,
				color: "#1c1f23",
				ease: Power2.easeOut,
				delay: 0.6
			});
			TweenMax.fromTo(".con_heads_bg", 2, {
				y: -12,
				color: "rgba(78, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				y: 0,
				color: "#1c1f23",
				ease: Power2.easeOut
			});
		}

		function social() {
			TweenMax.staggerFromTo(".fa", 2, {
				x: 400,
				color: "rgba(108, 0, 255, 0)",
				ease: Power0.easeNone
			}, {
				x: 0,
				color: "#A0A0A0",
				ease: Power2.easeOut
			}, 0.5);
		}
	}, 3000);
	var lets_head = document.getElementById("let_head");
	if ($(window).width() <= 500) {
		lets_head.innerHTML = "LET'S CHAT";
		console.log("working");
	} else {
		lets_head.innerHTML = "LET'S HAVE A CHAT";
	}
	$(window).resize(function() {
		if ($(window).width() <= 500) {
			lets_head.innerHTML = "LET'S CHAT";
			console.log("working");
		} else {
			lets_head.innerHTML = "LET'S HAVE A CHAT";
		}
	});
});