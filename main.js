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
		prevArrow: "<img src='accets/images/slidearrowL.svg' class='prev' alt=''>",
    	nextArrow: "<img src='accets/images/slidearrowR.svg' class='next' alt=''>",
	})
	$('.slider-3').slick({
		prevArrow: "<img src='accets/images/slidearrowL.svg' class='prev' alt=''>",
    	nextArrow: "<img src='accets/images/slidearrowR.svg' class='next' alt=''>",
	})
	$('.slider-4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-5',
		prevArrow: "<img src='accets/images/slidearrowL.svg' class='prev' alt=''>",
		nextArrow: "<img src='accets/images/slidearrowR.svg' class='next' alt=''>",
	});
	$('.slider-5').slick({
		centerMode: false,
		slidesToShow: 7,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.slider-4',
		focusOnSelect: true,
		infinite: true
	})
	$('.apart__section-2__slider').slick({
		prevArrow: "<img src='accets/images/slidearrowL.svg' class='prev' alt=''>",
    	nextArrow: "<img src='accets/images/slidearrowR.svg' class='next' alt=''>",
	})
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("actives");
		$(blockId).slideToggle();
	});

});