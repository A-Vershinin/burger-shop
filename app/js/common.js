"use strict"; // ES5

// $(document).ready(function() {

  $(function() { //One Page Scroll

    var sections = $('.section'),
        display = $('.wrapper__inner'),
        inScroll = false;

    var scrollToSection = function(sectionEq) {
    // можно доделать: передавать в функцию её название и смотреть какая она по номеру
      var position = 0;

      if (!inScroll) {

        inScroll = true;

        position = (sections.eq(sectionEq).index() * -100) + '%';

        sections.eq(sectionEq).addClass('section--active').
        siblings().removeClass('section--active');

        display.css({
          'transform' : 'translate3d(0, '+ position +', 0)'
        });

        setTimeout(function () {
          inScroll = false;
          // переключение точек
          $('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item--active')
          .siblings().removeClass('fixed-menu__item--active');
        }, 1300)
      }
    }
    //скрол по колесу
    $('.wrapper').on('wheel', function (e) {

      var deltaY = e.originalEvent.deltaY,
          activeSection = sections.filter('.section--active'),
          nextSection = activeSection.next(),
          prevSection = activeSection.prev();

      if (deltaY > 0) { //скролим вниз
        if (nextSection.length) {
          scrollToSection(nextSection.index());
        }
      }

      if (deltaY < 0) { //скролим вверх
        if (prevSection.length) {
          scrollToSection(prevSection.index());
        }
      }
    });

    //скрол по числам в ссылках
    $('.fixed-menu__link, .nav__link, .promo__btn, .burger__btn').on('click', function(e){
      e.preventDefault();
      var href = parseInt($(this).attr('href'));
      scrollToSection(href);
    });

    //скрол по стрелке
    $('.arrow').on('click', function(e){
      e.preventDefault();
      var href = parseInt($(this).attr('href'));
      scrollToSection(href);
    });

    //скрол по кнопкам
    $(document).on('keydown', function (e){

      var activeSection = sections.filter('.section--active'),
          nextSection = activeSection.next(),
          prevSection = activeSection.prev();

      switch (e.keyCode) {
        case 40: // листаем вниз
          if (nextSection.length) {
            scrollToSection(nextSection.index());
          }
          break;
        case 38:
          if (prevSection.length) {
            scrollToSection(prevSection.index());
          }
          break;
      }
    });
  });

  $(function() { //Burger slider

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

  $(function() { // menu-accordion
    $(".menu-acco__trigger").on("click", function(e) {
      e.preventDefault();
      var $this = $(this),
          container = $this.closest(".menu-acco"),
          otherContent = container.find(".team__acco-content"),
          items = container.find(".menu-acco__item"),
          item = $this.closest(".menu-acco__item");

      if (!item.hasClass('menu-acco__item--active')) {
        items.removeClass('menu-acco__item--active');
        item.addClass('menu-acco__item--active');
      } else {
        item.removeClass('menu-acco__item--active');
      }
    });
  });
// };
