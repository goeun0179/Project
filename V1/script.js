$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#Blind" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( ".eachdept" ).toggle( selectedEffect, options, 500 );
    };

 
    // Set effect from select menu value
    // $( ".departments" ).on( "click", function() {
    //   runEffect();
    // });
    $(".float.ad").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.apparel').addClass('appear');
		$('.float.ad').addClass('red');
	});


	$(".float.ar").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.architec').addClass('appear');
		$('.float.ar').addClass('red');
	});

	$(".float.cr").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.ceramics').addClass('appear');
		$('.float.cr').addClass('red');
	});

	$(".float.dm").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.digital').addClass('appear');
		$('.float.dm').addClass('red');
  	});

  	$(".float.fmv").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.film').addClass('appear');
		$('.float.fmv').addClass('red');
  	});

  	$(".float.fr").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.furniture').addClass('appear');
		$('.float.fr').addClass('red');
  	});

  		$(".float.gl").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.glass').addClass('appear');
		$('.float.gl').addClass('red');
  	});

  		$(".float.gr").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.graphicdesign').addClass('appear');
		$('.noneV.explanation').addClass('appear');
		$('.float.gr').addClass('red');
  	});

  		$(".float.Ill").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.Illustration').addClass('appear');
		$('.float.Ill').addClass('red');
  	});

  		$(".float.id").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.industrial').addClass('appear');
		$('.float.id').addClass('red');
  	});

  		$(".float.intar").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.interior').addClass('appear');
		$('.float.intar').addClass('red');
  	});

  		$(".float.jewel").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.jewelry').addClass('appear');
		$('.float.jewel').addClass('red');
  	});

  		$(".float.la").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.landscape').addClass('appear');
		$('.float.la').addClass('red');
  	});

  		$(".float.pa").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.painting').addClass('appear');
		$('.float.pa').addClass('red');
  	});

  		$(".float.ph").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.photo').addClass('appear');
		$('.float.ph').addClass('red');
  	});

  		$(".float.pr").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.print').addClass('appear');
		$('.float.pr').addClass('red');
  	});

  		$(".float.sc").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.sculpture').addClass('appear');
		$('.float.sc').addClass('red');
  	});

  		$(".float.tla").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.teaching').addClass('appear');
		$('.float.tla').addClass('red');
  	});

  		$(".float.te").click(function(){
		$('.default').addClass('disappear');
		$('.noneV').removeClass('appear');
		$('.float').removeClass('red');
		$('.noneV.textile').addClass('appear');
		$('.float.te').addClass('red');
  	});



  } );

