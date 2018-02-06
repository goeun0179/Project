

$(document).ready(function(){


	$('.ind').click(function(){
		console.log('click detected');
		$('#revealtop').toggle();
	});


	// $('.large').click(function(){
	// 	console.log('click detected');

	// 	$('.box').toggleClass('reveal');
	// });



		// for(var i=0; i<inItem; i++){
		// 	$('.inOne').prepend(Small);
		// }

var inItem=7;
var Medium ='<div class="medium"></div>';
var Small ='<div class="small"></div>';
var Cute ='<div class="cute"></div>';
var Pretty ='<div class="pretty"></div>';
var Tiny ='<div class="tiny"></div>';
var Min ='<div class="min"></div>';

	// $('.mediumOne').click(function(){
	// 	console.log('click detected');
		

	// 			$('.small').toggleClass('reveal');

	// 	console.log(i);


$("#whole").click(function(event) {
	var target = event.target;
	console.log(target);
	var targetClass = target.className;
	console.log(targetClass);

	// if (targetClass.indexOf("largest") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Medium);
	// 	} 
	// } else if (targetClass.indexOf("medium") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Small);
	// 	} 
	// } else if (targetClass.indexOf("small") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Smaller);
	// 		// console.log("small smaller firing");
	// 		console.log("bang");
	// 	} 
	// } else if (targetClass.indexOf("smaller") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Smallest);
	// 		console.log("dang");
	// 	} 
	// } else if (targetClass.indexOf("smallest") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Tiny);
	// 	} 
	// } else if (targetClass.indexOf("tiny") >=0) {
	// 	for(var i=0; i<inItem; i++){
	// 		$(target).after(Min);
	// 	} 
	// }

	if (targetClass.indexOf("largest") >=0) {
		//console.log($(target).siblings('.medium').length);
		if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.medium');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="medium"></div><div class="medium"></div><div class="medium"></div><div class="medium"></div><div class="medium"></div><div class="medium"></div><div class="medium"></div></div>');
			var something = $('.container');
			// for(var i=0; i<inItem; i++){
			// 	console.log("running for loop");
			// 	$(target > 'div').append(Medium);
			// }
		} 
	} 


	if (targetClass.indexOf("medium") >=0) {
		if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.small');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="small"></div><div class="small"></div><div class="small"></div><div class="small"></div><div class="small"></div><div class="small"></div><div class="small"></div></div>');
			var something = $('.container');
			// 	for(var i=0; i<inItem; i++){
			// 	$(target).after(Small);
			// } 
		} 
	} 


	if (targetClass.indexOf("small") >=0) {
		if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.cute');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="cute"></div><div class="cute"></div><div class="cute"></div><div class="cute"></div><div class="cute"></div><div class="cute"></div><div class="cute"></div></div>');
			var something = $('.container');
				// for(var i=0; i<inItem; i++){
				// 	$(target).after(Cute);
				// 	console.log("bang");
				// }
		} 
	} 

	if (targetClass.indexOf("cute") >=0) {
		if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.pretty');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="pretty"></div><div class="pretty"></div><div class="pretty"></div><div class="pretty"></div><div class="pretty"></div><div class="pretty"></div><div class="pretty"></div></div>');
			var something = $('.container');
			// for(var i=0; i<inItem; i++){
			// 	$(target).after(Pretty);
			// 	console.log("dang");
			// }
		} 
	} 

	if (targetClass.indexOf("pretty") >=0) {
			if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.tiny');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="tiny"></div><div class="tiny"></div><div class="tiny"></div><div class="tiny"></div><div class="tiny"></div><div class="tiny"></div><div class="tiny"></div></div>');
			var something = $('.container');
			// for(var i=0; i<inItem; i++){
			// 	$(target).after(Tiny);
			// 	console.log("dong");
			// }
		} 
	} 
	if (targetClass.indexOf("tiny") >=0) {
		if ($(target).siblings('.container').length > 0 ){
			console.log("triggered remove");
			$(target).siblings().remove('.container');
			$(target).children().remove('.min');
		}
		else {
			console.log("triggered make");
			$(target).after('<div class="container"><div class="min"></div><div class="min"></div><div class="min"></div><div class="min"></div><div class="min"></div><div class="min"></div><div class="min"></div></div>');
			var something = $('.container');
			// for(var i=0; i<inItem; i++){
			// 	$(target).after(Min);
			// 	console.log("ding");
			// }
		} 
	}	
	
})


});

