"use strict";
jQuery(document).ready(function() {
	var current_title = $(document).attr('title');
	setTimeout(function() {
		var menu_left = document.getElementById("menu_left_bg");
		var menu_right = document.getElementById("menu_right_bg");
		var menu_bot = document.getElementById("menu_bot_bg");
		$("#menu_right_text").mouseenter(function() {
			TweenMax.to("#right_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#right_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_right();
			TweenMax.to(".right_draw", 0.8, {
				strokeDashoffset: 0,
				ease: Power1.easeOut
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to("#right_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#right_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".right_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
		$("#menu_left_text").mouseenter(function() {
			TweenMax.to("#left_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#left_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_left();
			TweenMax.to(".left_draw", 0.8, {
				strokeDashoffset: 0,
				ease: Power1.easeOut
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to("#left_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#left_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".left_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
		$("#menu_left_text").mouseenter(function() {
			TweenMax.to("#left_p1", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			TweenMax.to("#left_p2", 2, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.3
			});
			draw_left();
			TweenMax.to(".left_draw", 0.8, {
				strokeDashoffset: 0,
				ease: Power1.easeOut
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to("#left_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.to("#left_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power2.easeIn
				});
				TweenMax.fromTo(".left_draw", 2, {
					strokeDashoffset: 0,
					ease: Power2.easeOut
				}, {
					strokeDashoffset: 1000,
					ease: Power2.easeOut,
					delay: 1.8
				});
			}
		});
		//creating paths------------------------------------------------------>
		var path_l = document.getElementById("left_draw");
		var path_r = document.getElementById("right_draw");

		function draw_left() {
			var string = create_string();
			path_l.setAttribute("d", string);

			function create_string() {
				var myStr = "M";
				var num = [];
				for (var i = 0; i < 4; i++) {
					num[i] = getNumbers();
				}
				myStr += "99 75" + ",L" + num[1] + ",L" + num[2] + ",L" + num[3] + ",L" + "1 0";
				return (myStr);
			}
		}

		function draw_right() {
			var string = create_string();
			path_r.setAttribute("d", string);

			function create_string() {
				var myStr = "M";
				var num = [];
				for (var i = 0; i < 4; i++) {
					num[i] = getNumbers();
				}
				myStr += "1 75" + ",L" + num[1] + ",L" + num[2] + ",L" + num[3] + ",L" + "99 0";
				return (myStr);
			}
		}

		function getNumbers() {
			var myStr = "";
			for (var i = 0; i < 2; i++) {
				var num = getRandomNum(35, 55);
				myStr += num.toString() + " ";
			}

			function getRandomNum(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			return (myStr);
		}
		$("#resp_about_hov").mouseenter(function() {
			TweenMax.to(".menu_r_c", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_l", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.1
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_c", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone,
					delay: 0.1
				});
				TweenMax.to(".menu_r_l", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_contact_hov").mouseenter(function() {
			TweenMax.to(".menu_r_c", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_r", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone,
				delay: 0.1
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_c", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone,
					delay: 0.1
				});
				TweenMax.to(".menu_r_r", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_about_hov").mouseenter(function() {
			TweenMax.to(".menu_r_t", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_t", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_t", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to(".menu_r_t", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#resp_contact_hov").mouseenter(function() {
			TweenMax.to(".menu_r_b", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to(".menu_r_b", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.5, stopAni);

			function stopAni() {
				TweenMax.to(".menu_r_b", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to(".menu_r_b", 1, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
		$("#menu_bot_bg").mouseenter(function() {
			TweenMax.to("#bot_p1", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
			TweenMax.to("#bot_p2", 1, {
				strokeDashoffset: 0,
				ease: Power0.easeNone
			});
		}).mouseleave(function() {
			TweenMax.delayedCall(0.9, stopAni);

			function stopAni() {
				TweenMax.to("#bot_p1", 2, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
				TweenMax.to("#bot_p2", 2, {
					strokeDashoffset: 1000,
					ease: Power0.easeNone
				});
			}
		});
	}, 1500);
	var mast_array = [];
	var str_array1 = [];
	var str_array2 = [];
	var str_array3 = [];
	var str_array4 = [];
	var object_array = [];
	letter_roll();
	animate_letters();
	var count_bg = 1;
	var count_sm = 0;
	$(window).resize(function() {
		if (($(window).width() > 1024) && (count_bg == 0)) {
			letter_roll();
			animate_letters();
			count_sm = 0;
			count_bg = 1;
		} else {
			if (($(window).width() < 1024) && (count_sm == 0)) {
				letter_roll();
				animate_letters();
				count_sm = 1;
				count_bg = 0;
			}
		}
	});

	function letter_roll() {
		var str1 = "CONTACT_ME";
		var str2 = "ABOUT_ME";
		var str3 = "PORTFOLIO";
		var str4 = "HOME";
		str_array1 = str1.split("");
		str_array2 = str2.split("");
		str_array3 = str3.split("");
		str_array4 = str4.split("");
		mast_array.push(str_array1, str_array2, str_array3, str_array4);

		function create_html() {
			for (var p = 0; p < mast_array.length; p++) {
				var myArray = [];
				myArray = mast_array[p];
				var myStrCon = "";
				for (var i = 0; i < myArray.length; i++) {
					myStrCon += "<div class='letter'><span>" + myArray[i] + "</span></div>" + " ";
				}
				object_array.push(myStrCon);
			}
			switch (current_title) {
				case ("Home"):
					home();
					break;
				case ("About me"):
					about();
					break;
				case ("Contact me"):
					contact();
					break;
				case ("Portfolio"):
					port();
					break;
				default:
					home();
					break;
			}

			function home() {
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[1];
					document.getElementById("text_here_contact").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
				}
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function about() {
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home_resp").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_contact").innerHTML = object_array[0];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function contact() {
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home_resp").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[1];
					document.getElementById("text_here_port").innerHTML = object_array[2];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}

			function port() {
				if ($(window).width() <= 1024) {
					document.getElementById("text_here_about_resp").innerHTML = object_array[1];
					document.getElementById("text_here_contact_resp").innerHTML = object_array[0];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				} else {
					document.getElementById("text_here_about").innerHTML = object_array[0];
					document.getElementById("text_here_contact").innerHTML = object_array[1];
					document.getElementById("text_here_home").innerHTML = object_array[3];
				}
				$("#resp_about_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#resp_contact_hov").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_left_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_right_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
				$("#menu_bot_text").click(function() {
					window.location = $(this).find("a").attr("href");
					return false;
				});
			}
		}
		create_html();
	}

	function animate_letters() {
		TweenMax.set(".letter", {
			css: {
				rotationY: 90,
				color: "rgba(0, 255, 20, 0.08)"
			},
			ease: Power3.easeOut
		});
		TweenMax.staggerTo(".letter", 0.5, {
			css: {
				rotationY: 0,
				color: "#4b4f50"
			},
			ease: Power3.easeOut
		}, 0.15);
	}
});