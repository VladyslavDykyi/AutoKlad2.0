$(document).ready(function () {
	/*--- слайдер на карточке товара ---*/
	$('.tovar-for').slick({
		infinite: false,
		autoplay: false,
		autoplaySpeed: 400000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		dotsClass: "my-dots-bot",
		fade: false,
	//	asNavFor: '.tovar-nav',
	});
	// $('.tovar-nav').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	vertical: false,
	// 	asNavFor: '.tovar-for',
	// 	focusOnSelect: true,
	// 	arrows: false,
	// });
	$('.slider__popUp').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		nextArrow: '<div class="nextArrow"></div>',
		prevArrow: '<div class="prevArrow"></div>',
		//asNavFor: '.tovar-nav',
	});
	$('.slider-banners').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		dots: true,
		dotsClass: "my-dots",
	});
	// скрыть/раскрыть текст
	$('.full-btn').click(function () {
		$('.bot-cont__text').toggleClass('active');
		$('.full-btn').css('display', 'none');
	});
	// скрыть/раскрыть текст
	//скрыть раскрыть текст в ответе

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
		baseTpl:
			'<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner">' +
			'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
			'<div class="fancybox-toolbar">{{buttons}}</div>' +
			'<div class="fancybox-navigation">{{arrows}}</div>' +
			'<div class="fancybox-stage"></div>' +
			'<div class="fancybox-caption"><div class="fancybox-caption__body"></div>' +
			'<div class="fancybox-caption__body2">Картинка носит ознакомительный характер и может отличаться от реального товара</div>' +
			'</div>' +
			'</div>' +
			'</div>',
	});
	$('.slick-cloned div a').removeAttr('data-fancybox');
});