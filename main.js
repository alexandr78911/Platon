$(function() {
	$('.slider').slick({
		dots: true,
		centerMode: true,
 		slidesToShow: 1,
  		prevArrow: "<img src='accets/images/Chevron - Left.svg' class='prev' alt=''>",
    	nextArrow: "<img src='accets/images/Chevron - Right.svg' class='next' alt=''>",
	})
	$('.slider-2').slick({
		dots: true,
  		prevArrow: "<img src='accets/images/Chevron - Left.svg' class='prev' alt=''>",
    	nextArrow: "<img src='accets/images/Chevron - Right.svg' class='next' alt=''>",
	})
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("actives");
		$(blockId).slideToggle();
	});

});