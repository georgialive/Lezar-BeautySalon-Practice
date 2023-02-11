/*-----------------------------------------------------------------------------------
    Template Name: Lezar - Beauty Salon HTML Template
    Template URI: https://webtend.net/demo/html/lezar/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header
    02. Dropdown menu
    03. Submenu Dropdown
    04. Menu Hidden
    05. Search Box
    06. Gallery Popup
    07. Instagram Popup
    08. Video Popup
    09. Client Logos
    10. Scroll to Top
    11. Marquee Text
    12. Project Masonry
    13. Gallery Masonry
    14. Portfolio Filtering
    15. Feedback Slider One
    16. Feedback Slider Two
    17. Feedback Slider Three
    18. Feedback 2 Row Slider
    19. Main Slider
    20. Gallery Widget
    21. Fact Counter
    22. Skill prograsbar
    23. Quantity Number
    24. Price Totaling
    25. Nice Select
    26. WOW Animation
    27. Coming Soon
    28. Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
         
        // 04. Menu Hidden Sidebar Content Toggle
        if($('.menu-sidebar').length){
            //Show Form
            $('.menu-sidebar').on('click', function(e) {
                e.preventDefault();
                $('body').toggleClass('side-content-visible');
            });
            //Hide Form
            $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
                e.preventDefault();
                $('body').removeClass('side-content-visible');
            });
            //Dropdown Menu
            $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
                $(this).next('ul').slideToggle(500);
            });
        }
         
        
        // 05. Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
        
        // 06. Gallery Popup
        $('.gallery-overlay a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
                
        // 07. Instagram Popup
        $('.instagram-item a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // 08. Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        } 
        
        
        // 09. Client Logos
        if ($('.client-logo-wrap').length) {
            $('.client-logo-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        } 
        
        // 10. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }

        
        /* 11. Marquee Text Slider */
       if ($('.marquee-text').length) {
           $('.marquee-text').slick({
                speed: 10000,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false
           });
       }
        
        /* 12. Project Masonry */
       if ($('.project-active').length) {
            $('.project-active').isotope({
              itemSelector: '.item',
              percentPosition: true,
              masonry: {
                columnWidth: '.item'
              }
            })
       }
        
                
        /* 13. Gallery Masonry */
       if ($('.gallery-wrap').length) {
            $('.gallery-wrap').imagesLoaded(function () {
                $('.gallery-wrap').isotope({
                  itemSelector: '.gallery-item',
                  percentPosition: true,
                  masonry: {
                    columnWidth: '.gallery-item'
                  }
                })
            });
       }
        
        
        // 14. Portfolio Filtering
        $(".portfolio-filter li").on('click', function () {
            $(".portfolio-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.portfolio-active').imagesLoaded(function () {
                $(".portfolio-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                });
            });

        });
        
                
        // 15. Feedback Slider One   
        if ($('.feedback-item-wrap').length) {
            $('.feedback-item-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                fade: true,
                autoplaySpeed: 5000,
                arrows: false,
                centerMode: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.feedback-logo-wrap'
            });
        }
        
        if ($('.feedback-logo-wrap').length) {
            $('.feedback-logo-wrap').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                asNavFor: '.feedback-item-wrap',
            });
        } 
        
        
        // 16. Feedback Slider Two
        if ($('.feedback-active').length) {
            var $slider = $('.feedback-active');
            var $progressBar = $('.progress');
            var $progressBarLabel = $( '.slider__label' );

            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
                
                $progressBar
                  .css('width', calc + '%')
                  .attr('aria-valuenow', calc );

                $progressBarLabel.text( calc + '% completed' );
            });

            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                speed: 400,
                prevArrow: $('.feedback-prev'),
                nextArrow: $('.feedback-next'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 
    
        
        // 17. Feedback Slider Three   
        if ($('.feedback-wrap-three').length) {
            $('.feedback-wrap-three').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                fade: true,
                autoplaySpeed: 5000,
                arrows: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.feedback-prev-arrow'),
                nextArrow: $('.feedback-next-arrow'),
            });
        }
        
        
        // 18. Feedback 2 Row Slider 
        if ($('.feedback-active-two-row').length) {
            $('.feedback-active-two-row').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                rows: 2,
                speed: 400,
                prevArrow: $('.feedback-prev'),
                nextArrow: $('.feedback-next'),
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 
        
       
        
        /* 19. Main Slider */
        if ($('.slider-section').length) {
            $('.slider-section').slick({
                infinite: true,
                arrows: true,
                dots: true,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                prevArrow: '<button class="slider-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                nextArrow: '<button class="slider-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
            });
        }
        
                
        // 20. Gallery Widget
        $('.widget-gallery-item a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
     
        
         /* 21. Fact Counter + Text Count - Our Success */
        if ($('.counter-item').length) {
            $('.counter-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        // 22. Skill prograsbar and percent
        if ($('.skillbar').length) {
            $('.skillbar').appear(function () {
                $('.skillbar').skillBars({
                    from: 0,
                    speed: 4000,
                    interval: 100,
                });
            });
        }
        
        
        // 23. Quantity Number js
        $('.quantity-down').on('click', function(){
            var numProduct = Number($(this).next().val());
            if(numProduct > 1) $(this).next().val(numProduct - 1);
        });
        $('.quantity-up').on('click', function(){
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });
        
        
        // 24. Price Totaling Function
        function priceTotaling() {
            var quantity = $(this).parent().find('.quantity').val();
            var price = $(this).parent().parent().find('.product-price').text();
            $(this).parent().parent().find('.product-total-price').text(quantity*price);

            var subTotal = 0;

            $('.product-total-price').each(function(){
                var singleVal = $(this).text();
                if($.isNumeric(singleVal)){
                    subTotal += parseFloat(singleVal);
                }
            });

            $('.sub-total-price').text(subTotal);
            var shipping = $('.shipping-price').text();
            $('.total-price').text((+subTotal) + (+shipping));
        }

        //  Cart Single Item box removed with Animation and Price Totaling
        $(".cart-single-item .close").on('click', function(){
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
                priceTotaling();
            });
        });

        //  Price Totaling when product quantity increment or decrement
        $(".quantity-input button").on('click', priceTotaling);

        //  Price Totaling when input in product quantity number in input field
        $(".quantity-input").on('input', '.quantity', priceTotaling);
        
        
        // 25. Nice Select
        $('select').niceSelect();
        

        
        // 26. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
        
        // 27. Coming Soon
        if($('.coming-soon-inner').length !== 0){
            const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
            let	countDown = new Date('May 30, 2023 00:00:00').getTime(),
            x = setInterval(function() {
              let now = new Date().getTime(),
                  distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }, second)
        };
        
        
    });
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 28. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

               
        // 14. Portfolio Filtering
       if ($('.portfolio-active').length) {
            $(".portfolio-active").isotope({
                itemSelector: '.item',
            });
        };
        
        
        // 27. Coming Soon
        if($('.coming-soon-inner').length !== 0){
            const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
            let	countDown = new Date('May 30, 2023 00:00:00').getTime(),
            x = setInterval(function() {
              let now = new Date().getTime(),
                  distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }, second)
        };
        
        
    });

})(window.jQuery);
