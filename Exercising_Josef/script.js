$(document).ready(function(){

	$('.float').click(function(){
		console.log('click detected');
		$('h1').toggleClass('reveal');
	});

	$(".float large").click(function(){
		console.log("clicking element");
		$(this).toggleClass('play');
	});

});
