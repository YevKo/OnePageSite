$(document).ready(function(){

	function updateContent(hash) {
		//remove the # character
		var newClass = hash.substring(1);
		// get a content from the respective div
		var newContent = $("." + newClass).html();
		// update main content
		$("#inner_content_container").html(newContent);
	}

	// redirect when page is reloaded
	if(window.location.hash) {
		updateContent(window.location.hash);
		$(window.location.hash).addClass("active");
	} else {
		// if no hash is defined redirect to the home page
		updateContent("#home");
		$("#home").siblings().removeClass("active");
		$("#home").addClass("active");
	}
	
	$(".nav_item, .navbar-brand").click(function(){
		updateContent($(this).attr("href"));
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
	});

});