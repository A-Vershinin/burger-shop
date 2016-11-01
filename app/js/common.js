'use strict'; // ES5

$(document).ready(function() {

	$(function () { // One Page Scroll

		var sections = $('.section'),
			display = $('.wrapper__inner'),
			inScroll = false;

		var scrollToSection = function (sectionEq) {
    // можно доделать: передавать в функцию её название и смотреть какая она по номеру
			var position = 0;

			if (!inScroll) {
				inScroll = true;

				position = (sections.eq(sectionEq).index() * -100) + '%';

				sections.eq(sectionEq).addClass('section--active')
        .siblings().removeClass('section--active');

				display.css({
					transform: 'translate3d(0, ' + position + ', 0)'
				});

				setTimeout(function () {
					inScroll = false;
          // переключение точек
					$('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item--active')
          .siblings().removeClass('fixed-menu__item--active');
				}, 1300);
			}
		};
    // скрол по колесу
    // $('.wrapper').on('wheel', function (e) {});
		$('.wrapper').on({
			wheel: function (e) { // скрол по колесу мишы
        // console.log(e);
				var deltaY = e.originalEvent.deltaY,
					activeSection = sections.filter('.section--active'),
					nextSection = activeSection.next(),
					prevSection = activeSection.prev();
				if (deltaY > 0) { // скролим вниз
					if (nextSection.length) {
						scrollToSection(nextSection.index());
					}
				}
				if (deltaY < 0) { // скролим вверх
					if (prevSection.length) {
						scrollToSection(prevSection.index());
					}
				}
			},
			tap: function (e) { // скрол по тачу для мобильных
				console.log(e);
        // todo
			},
			swipe: function (e) {
				console.log(e);
        // todo
			}
		});

    // скрол по числам в ссылках
		$('.fixed-menu__link, .nav__link, .promo__btn, .burger__btn').on('click', function (e) {
			e.preventDefault();
			var href = parseInt($(this).attr('href'));
			scrollToSection(href);
		});

    // скрол по стрелке
		$('.arrow').on('click', function (e) {
			e.preventDefault();
			var href = parseInt($(this).attr('href'));
			scrollToSection(href);
		});

    // скрол по кнопкам
		$(document).on('keydown', function (e) {
			var activeSection = sections.filter('.section--active'),
				nextSection = activeSection.next(),
				prevSection = activeSection.prev();

			switch (e.keyCode) {
				case 40: // листаем вниз
					if (nextSection.length) {
						scrollToSection(nextSection.index());
					}
					break;
				case 38: // листаем вверх
					if (prevSection.length) {
						scrollToSection(prevSection.index());
					}
					break;
			}
		});
	});

	$(function () { // Burger slider

		var burgerOwl = $('.burgers__slide').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplaySpeed: 1500,
			smartSpeed: 750
		});

		$('.burger__slider-btn--next').on('click', function (e) {
			e.preventDefault();
			burgerOwl.trigger('next.owl.carousel');
		});

		$('.burger__slider-btn--prev').on('click', function (e) {
			e.preventDefault();
			burgerOwl.trigger('prev.owl.carousel');
		});
	});

	$(function () { // team__accordion

		 $(".team__acco-trigger").on("click", function(e) {
		  e.preventDefault();
			console.log("111");
		    var $this = $(this),
		        container = $this.closest(".team__acco"),
		        otherContent = container.find(".team__acco-content-wrap"),
		        items = container.find(".team__acco-item"),
		        item = $this.closest(".team__acco-item"),
		        content = item.find(".team__acco-content-wrap"),
		        reqHeight = item.find(".team__acco-content").outerHeight();

		    if (!item.hasClass('team__acco-item--active')) {
		      items.removeClass('team__acco-item--active');
		      item.addClass('team__acco-item--active');
		      otherContent.css({
		        'height': 0
		      });
		      content.css({
		        'height': reqHeight
		      });
		    } else {
		      item.removeClass('team__acco-item--active');
		      content.css({
		        'height': 0
		      });
		    }
		  });
	});

	$(function () { // menu-accordion
		$('.menu-acco__trigger').on('click', function (e) {
			e.preventDefault();
			var $this = $(this),
				container = $this.closest('.menu-acco'),
				otherContent = container.find('.menu__acco-content'),
				items = container.find('.menu-acco__item'),
				item = $this.closest('.menu-acco__item');

			if (!item.hasClass('menu-acco__item--active')) {
				items.removeClass('menu-acco__item--active');
				item.addClass('menu-acco__item--active');
			} else {
				item.removeClass('menu-acco__item--active');
			}
		});
    // закрытие по клику вне аккордиона
		$(document).on('click', function (e) {
			var $this = $(e.target);
			if (!$this.closest('.menu-acco').length) {
				$('.menu__acco-content').animate({
					width: '0px'
				});
				$('.menu-acco__item')
        .removeClass('menu-acco__item--active');
			}
		});
	});

	$(function () { // input mask
	  $('.phone-mask').inputmask('+7 (999) 999 99 99');
	});

	$(function () { // popup
		$('.reviews__hover-link').fancybox({
			type: 'inline',
			maxWidth: 460,
			fitToView: false,
			padding: 0
		});
		$('full-review__close').on('click', function(e) {
			e.preventDefault;
			$.fancybox.close();
		});
	});
});
