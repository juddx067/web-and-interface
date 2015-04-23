$(document).ready(function() {
	
//madison toggle
		$("#madison").click(function(){
		$("#madison_message").slideToggle(500);
	});
//hover
		$("#madison_profile").mouseenter(function() {
			$("#madison_hover").fadeTo("fast", 1);
	});
		$("#madison_profile").mouseleave(function() {
			$("#madison_hover").fadeTo("fast", 0);
	}); 

//lincoln toggle
		$("#lincoln").click(function(){
		$("#lincoln_message").slideToggle(500);
	});
//hover
		$("#lincoln_profile").mouseenter(function() {
			$("#lincoln_hover").fadeTo("fast", 1);
	});
		$("#lincoln_profile").mouseleave(function() {
			$("#lincoln_hover").fadeTo("fast", 0);
	}); 

//brookfield toggle
		$("#brookfield").click(function(){
		$("#brookfield_message").slideToggle(500);
	});
//hover
		$("#brookfield_profile").mouseenter(function() {
			$("#brookfield_hover").fadeTo("fast", 1);
	});
		$("#brookfield_profile").mouseleave(function() {
			$("#brookfield_hover").fadeTo("fast", 0);
	}); 

//sussex toggle
		$("#sussex").click(function(){
		$("#sussex_message").slideToggle(500);
	});
//hover
		$("#sussex_profile").mouseenter(function() {
			$("#sussex_hover").fadeTo("fast", 1);
	});
		$("#sussex_profile").mouseleave(function() {
			$("#sussex_hover").fadeTo("fast", 0);
	}); 

//sacramento toggle
		$("#sacramento").click(function(){
		$("#sacramento_message").slideToggle(500);
	});
//hover
		$("#sacramento_profile").mouseenter(function() {
			$("#sacramento_hover").fadeTo("fast", 1);
	});
		$("#sacramento_profile").mouseleave(function() {
			$("#sacramento_hover").fadeTo("fast", 0);
	}); 

//wauwatosa toggle
		$("#wauwatosa").click(function(){
		$("#wauwatosa_message").slideToggle(500);
	});
//hover
		$("#wauwatosa_profile").mouseenter(function() {
			$("#wauwatosa_hover").fadeTo("fast", 1);
	});
		$("#wauwatosa_profile").mouseleave(function() {
			$("#wauwatosa_hover").fadeTo("fast", 0);
	}); 

//glyph animation
var rotation = function (){
   $("#flower1").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}

    rotation();

		
});