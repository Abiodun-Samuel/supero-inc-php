!(function ($) {
  ("use strict");
  // nivoSlider for intro section

  // about us gallery
  $(".main-instagram").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    navText: [
      '<i> <svg  width="1.5em" height="1.5em" viewBox="0 0 32 32"><defs/><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24z" fill="#2f552e"/></svg></i>',
      '<svg  width="1.5em" height="1.5em"  viewBox="0 0 32 32"><defs/><path d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8z" fill="#2f552e"/></svg>',
    ],
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true,
      },
    },
  });

  /* ..............................................
	   products Special Menu
	   ................................................. */

  var Container = $(".container");
  Container.imagesLoaded(function () {
    var portfolio = $(".special-menu");
    portfolio.on("click", "button", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    var $grid = $(".special-list").isotope({
      itemSelector: ".special-grid",
    });
  });

  // back to the top button
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });
    $("#back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 500,
      once: false,
      mirror: false,
      offset: 50,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);

