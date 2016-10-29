

$(document).ready(function() {

  // menu-accordion jQuery
  $(".menu-acco__trigger").on("click", function(e) {
    e.preventDefault();
    var $this = $(this),
        container = $this.closest(".menu-acco"),
        otherContent = container.find(".team__acco-content"),
        items = container.find(".menu-acco__item"),
        item = $this.closest(".menu-acco__item");

    console.log("11");
    if (!item.hasClass('menu-acco__item--active')) {
      items.removeClass('menu-acco__item--active');
      item.addClass('menu-acco__item--active');
    } else {
      item.removeClass('menu-acco__item--active');
    }
  });

});
