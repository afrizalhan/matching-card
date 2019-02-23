$(document).ready(function() {
	$("#start").click(function() {
		$("#main") .fadeIn(200);
		$("#openmenu").animate({left:"-10%"});
		$("#closemenu").animate({left:"93%"});
		$(".menu").animate({left:"-1%"}, 10);
	});
	$("#closemenu").click(function() {
		$("#main") .fadeOut(200);
		$("#openmenu").animate({left:"0%"});
		$("#closemenu").animate({left:"100%"});
		$(".menu").animate({left:"-50%"}, 10);
	});
});
