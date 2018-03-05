/***********************
 отправка формы в php BEGIN
 ***********************/
$(function () {
	$(".ajax-form").on("submit", function (event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function () {
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')) {
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')) {
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus change', function () {
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label').toString();
			form_data.append(input_label__name, input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/anetta/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function (result) {
					var response = JSON.parse(result);
					console.log(response);
					$.fancybox.close();
					if (response["MAILER_ERROR"] !== undefined) {
						$.fancybox.open({src: '#modal-error'});
					} else {
						$.fancybox.open({src: '#modal-thanks'});
						setTimeout(function () {
							$.fancybox.close();
						}, 4500);
						form[0].reset();
					}
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
 ***********************/


/***********************
 Input mask BEGIN
 ***********************/
$(function () {
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});

/***********************
 Input mask END
 ***********************/


/***********************
Video Title Height BEGIN
***********************/
$(document).ready(function() {
	if ($(window).width() > 681) {
		if($('.video__item-title').length) {
			var $videoTitle = $('.video__item .video__item-title');
			var $videoItem = $('.video__item');

			function videoTitleHeight($videoTitle) {
				$videoTitle.eq(0).css('height', 'initial');
				var maxHeight = $videoTitle.eq(0).outerHeight();

				$videoTitle.each(function(indx, element){
					$(element).css('height', 'initial');
					if ($(element).outerHeight() > maxHeight) {
						maxHeight = $(element).height();
					}
					$(element).outerHeight(maxHeight);
				});

				$videoTitle.each(function(indx, element){
					$(element).outerHeight(maxHeight);
				});
			}

			videoTitleHeight($videoTitle);

			$(window).resize(function(){
				videoTitleHeight($videoTitle);
			});
		}
	}

});
/***********************
Video Title Height END
***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$('.fancy').fancybox({
		buttons: ['close'],
		backFocus: false,
		animationEffect: "zoom-in-out",
		animationDuration: 300,
		transitionEffect: "slide",
		lang : 'ru',
		i18n : {
			'ru' : {
				CLOSE       : 'Закрыть',
				NEXT        : 'Дальше',
				PREV        : 'Назад',
				ERROR       : 'Не удается загрузить. <br/> Попробуйте позднее.',
				PLAY_START  : 'Начать слайдшоу',
				PLAY_STOP   : 'Остановить слайдшоу',
				FULL_SCREEN : 'На весь экран',
				THUMBS      : 'Превью'
			}
		}
	});
	$('.fancy-map').fancybox({
		toolbar: false,
		smallBtn: true,
		backFocus: false,
		animationEffect: "zoom-in-out",
		animationDuration: 300,
		transitionEffect: "slide",
		lang : 'ru',
		i18n : {
			'ru' : {
				CLOSE       : 'Закрыть',
				NEXT        : 'Дальше',
				PREV        : 'Назад',
				ERROR       : 'Не удается загрузить. <br/> Попробуйте позднее.',
				PLAY_START  : 'Начать слайдшоу',
				PLAY_STOP   : 'Остановить слайдшоу',
				FULL_SCREEN : 'На весь экран',
				THUMBS      : 'Превью'
			}
		}
	});
}

function init_fancy__video() {
	$('.fancy-video').fancybox({
		toolbar: false,
		smallBtn: true,
		backFocus: false,
		animationEffect: "zoom-in-out",
		animationDuration: 300,
		transitionEffect: "slide",
		lang : 'ru',
		i18n : {
			'ru' : {
				CLOSE       : 'Закрыть',
				NEXT        : 'Дальше',
				PREV        : 'Назад',
				ERROR       : 'Не удается загрузить. <br/> Попробуйте позднее.',
				PLAY_START  : 'Начать слайдшоу',
				PLAY_STOP   : 'Остановить слайдшоу',
				FULL_SCREEN : 'На весь экран',
				THUMBS      : 'Превью'
			}
		},
		youtube: {
			controls: 1,
			showinfo: 0,
			autoplay: 1
		},
		onUpdate: function (instance, current) {
			var width,
				height,
				ratio = 16 / 9,
				video = current.$content;
			if (video) {
				video.hide();
				width = current.$slide.width() - 30;
				height = current.$slide.height() - 100;
				if (height * ratio > width) {
					height = width / ratio;
				} else {
					width = height * ratio;
				}
				video.css({
					width: width,
					height: height
				}).show();
			}
		}
	});
}

$(function () {
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function () {
	$('.scrollto').on('click', function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').stop().animate({scrollTop: destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/


/***********************
Slick BEGIN
***********************/
$(document).ready(function(){
	$('.about__serts-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		fade: true,
		adaptiveHeight: true,
		arrows: false
	});
	$('.about__serts-slider-descr').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.about__serts-slider',
		nextArrow: '<a class="slick-next"></a>',
		prevArrow: '<a class="slick-prev"></a>',
		adaptiveHeight: true,
		fade: true,
		infinite: false,
		focusOnSelect: true
	});

	$('.television__slider-hand').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.television__slider-descr',
		adaptiveHeight: true,
		accessibility: false,
		vertical: true,
		verticalSwiping: true,
		arrows: false
		//centerMode: true
		//infinite: false
	});
	$('.television__slider-descr').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.television__slider-hand',
		nextArrow: '<a class="slick-next"></a>',
		prevArrow: '<a class="slick-prev"></a>',
		adaptiveHeight: true,
		fade: true,
		accessibility: false,
		//vertical: true,
		verticalSwiping: true,
		focusOnSelect: true
		//infinite: false
	});


	var smiSliderCount = $('.smi__slide').length;
	$('.smi__slider').on('init', function(event, slick, direction){
		$('.smi__slider-count-all').text(smiSliderCount);
	});

	$('.smi__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false,
		centerPadding: '0',
		centerMode: true,
		responsive: [
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.smi__slider').on('afterChange', function(event, slick, direction){
		var currentSlide = $('.smi__slider').slick('slickCurrentSlide') + 1;
		$('.smi__slider-count-current').text(currentSlide);
	});

	$('.smi__slider-nav .slick-next').on('click', function (event) {
		event.preventDefault();
		$('.smi__slider').slick('slickNext');
	});
	$('.smi__slider-nav .slick-prev').on('click', function (event) {
		event.preventDefault();
		$('.smi__slider').slick('slickPrev');
	});
});
/***********************
Slick END
***********************/


/***********************
 Waypoints BEGIN
 ***********************/
$(function () {
	$('.anim').waypoint(function () {
		$(this.element).toggleClass('animated');
	}, {
		offset: '85%'
	});
});

$(window).on('load',function () {
	Waypoint.refreshAll();
});
/***********************
 Waypoints END
 ***********************/


/***********************
Video Play Preview BEGIN
***********************/
$(document).ready(function() {
	$(window).resize(function () {
		videoPlayPreview();
	})

	function videoPlayPreview() {
		if($(window).width() > 1024) {
			// $('.video__item-play video').each(function (indx, el) {
			// 	if(!$(this).attr('src')) {
			// 		var videoSrc = $(this).data('src');
			// 		$(this).attr('src',videoSrc);
			// 	}
			//
			// });

			$('.video__item-play').hover(
				function(){
					$(this).find('video')[0].play();
				},
				function(){
					$(this).find('video')[0].pause();
					$(this).find('video')[0].currentTime = 0;
				}
			);
		}
	};

	videoPlayPreview();
});
/***********************
Video Play Preview END
***********************/


/***********************
User Slide Mobile BEGIN
***********************/
$(document).ready(function() {
	if($(window).width() < 681) {
		$('.user-slide-mobile').slideUp();
		$('.user-slide-mobile-link').on('click', function(){
			$(this).next('.user-slide-mobile').slideToggle();
			$(this).toggleClass('active');
		},Waypoint.refreshAll());
	}
});
/***********************
User Slide Mobile END
***********************/