$(document).ready(function(){

	$('.large').click(function(){
		console.log('click detected');
		$('#box').toggleClass('reveal');
	});

	$('.medium').click(function(){
		console.log('click detected');
		$('#box2').toggleClass('reveal');
	});

	$('.small').click(function(){
		console.log('click detected');
		$('#box3').toggleClass('reveal');
	});

	$('.smaller').click(function(){
		console.log('click detected');
		$('#box4').toggleClass('reveal');
	});

	$('.smallest').click(function(){
		console.log('click detected');
		$('#box5').toggleClass('reveal');
	});


	// $(".element").click(function(){
	// 	console.log("clicking element");
	// 	$(this).toggleClass('play');
	// });

});
