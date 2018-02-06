$( function() {
  $( "#draggable" ).draggable();
  $( "#d_unit1" ).draggable();
  $( "#d_unit2" ).draggable();
  $( "#d_unit3" ).draggable();
  $( "#d_unit4" ).draggable();
  $( "#d_unit5" ).draggable();


} );


// $( function() {
//     // run the currently selected effect
//     function runEffect() {
//       // get effect type from
//       var selectedEffect = $( "#effectTypes" ).val();
//
//       // Most effect types need no options passed by default
//       var options = {};
//       // some effects have required parameters
//       if ( selectedEffect === "scale" ) {
//         options = { percent: 50 };
//       } else if ( selectedEffect === "size" ) {
//         options = { to: { width: 280, height: 185 } };
//       }
//
//       // Run the effect
//       $( "#effect" ).show( selectedEffect, options, 1000, callback );
//     };
//
//     //callback function to bring a hidden box back
//     function callback() {
//       setTimeout(function() {
//         $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
//       }, );
//     };
//
//     // Set effect from select menu value
//     $( "#button" ).on( "click", function() {
//       runEffect();
//     });
//
//     $( "#effect" ).hide();
//   } );
