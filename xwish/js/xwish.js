jQuery('document').ready(function($){

	jQuery('.single_slide').slick({
		dots: true,
		arrows: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>"
  	});
				

	jQuery(".progress").each(function() {
		var progressBar = $(".progress-bar");
		progressBar.each(function(indx){
			$(this).css("width", $(this).attr("aria-valuenow") + "%");
		});
	});

}); 