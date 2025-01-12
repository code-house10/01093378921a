(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

	    // h1-hero-active
		function mainSlider() {
			var BasicSlider = $('.slider-active');
			BasicSlider.on('init', function (e, slick) {
			  var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			  doAnimations($firstAnimatingElements);
			});
			BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			  var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			  doAnimations($animatingElements);
			});
			BasicSlider.slick({
			  autoplay: true,
			  autoplaySpeed: 3500,
			  dots: false,
				rtl: true,
			  fade: true,
			  arrows: false, 
			  prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
			  nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
			  responsive: [{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				  }
				}
			  ]
			});
	  
			function doAnimations(elements) {
			  var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			  elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
				  'animation-delay': $animationDelay,
				  '-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
				  $this.removeClass($animationType);
				});
			  });
			}
		  }
		  mainSlider();

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
				rtl: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

		  /**
   * Frequently Asked Questions Toggle
   */
			document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
				faqItem.addEventListener('click', () => {
					faqItem.parentNode.classList.toggle('faq-active');
				});
			});

			  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

})(jQuery);
