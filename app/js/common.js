"use strict"; // ES5

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

    console.log('wheel');
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
  $('.fixed-menu__link, .nav__link, .promo__btn').on('click', function(e){
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
