// "use strict"; // ES5

// (function() { //область видимости
//   // team__accordion VanillaJS
//   var toggles = document.querySelectorAll(".team__acco-trigger");
//   var _onclick =function(e) {
//     e.preventDefault();
//     var elem = e.target;
//     var parent = elem.closest(".team__acco-item");
//     var content = parent.querySelector(".team__acco-content");
//     var items = document.querySelectorAll(".team__acco-item");
//
//     for (var item of items) {
//       item.classList.remove("team__acco-item--active");
//     }
//     parent.classList.toggle("team__acco-item--active");
//   }
//   for (var item of toggles) {
//     item.addEventListener("click", _onclick);
//   }
// })();

$(document).ready(function() {
  // team__accordion jQuery
  $(".team__acco-trigger").on("click", function(e) {
    e.preventDefault();
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
