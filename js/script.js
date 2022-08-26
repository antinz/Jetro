$(function () {
	$('.slider__top').slick({
		slidesToShow: 1,
		arrows: true,
		speed: 500,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		infinite: true,
		asNavFor: '.slider__bottom'
	});
	$('.slider__bottom').slick({
		slidesToShow: 6,
		asNavFor: '.slider__top',
		focusOnSelect: true,
		dots: false,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 905,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 786,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 475,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__menu > ul').slideToggle();
	});

});