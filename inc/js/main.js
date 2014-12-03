$(document).ready(function(){

	// show images when scroll down window
	$(window).on('load', function(){
	    $(window).on('scroll', function(){

	    	if ($(this).scrollTop() >= 50) {
	      		imageSlideIn("#jobbot img", "right");
	    	  } 

	    	if ($(this).scrollTop() >= 300) {
	      		imageSlideIn("#talentpool img", "left");
	   		 } 
	    	if($(this).scrollTop() >= 550) {
	    	  	imageSlideIn("#events img", "right");
	    	    $(window).off('scroll');
	    	}

	    });
  	});

	// image slides in from the side of the screen
  	function imageSlideIn(id, direction){
  		if (direction == "right"){
			$(id).animate({right:'0%'}, 1500);
		} else{
			$(id).animate({left:'0%'}, 1500);
		}
  	}

});