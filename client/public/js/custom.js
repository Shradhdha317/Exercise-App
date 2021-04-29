/*
Copyright (c) 2018
------------------------------------------------------------------
[Master Javascript]

Project:	Cycling  - Responsive HTML Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var cycling = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Cycling Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Fixedmenu();
            this.Togglemenu();
            this.Slider();
            
          
            this.Search();
          
            this.Popup();
            this.Select();
			
        },
        /*-------------- Cycling Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        // Fixed Menu
        Fixedmenu: function() {
            if ($('.cy_top_wrapper').length > 0) {
                var height = $('.cy_top_wrapper').outerHeight();
                $('.cy_menu_wrapper').css("top", height);
            }
        },
        //Menu
        Togglemenu: function() {
            $(".cy_menu_btn").on('click', function() {
                $(".cy_menu_wrapper").toggleClass('open_menu');
            });
            $(".cy_menu_close").on('click', function() {
                $(".cy_menu_wrapper").removeClass('open_menu');
            });
            $('.cy_menu ul li.dropdown').children('a').append(function() {
                return '<div class="dropdown-expander"><i class="fa fa-bars"></i></div>';
            });
            $(".cy_menu ul > li:has(ul) > a").on('click', function(e) {
                var w = window.innerWidth;
                if (w <= 991) {
                    e.preventDefault();
                    $(this).parent('.cy_menu ul li').children('ul.sub-menu').slideToggle();
                }
            });
        },
        //Banner Slider
        Slider: function() {
            if ($(".rev_slider_wrapper").length) {
                var tpj = jQuery;
                var revapi1068;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1068_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1068_1");
                    } else {
                        revapi1068 = tpj("#rev_slider_1068_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugin/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "off",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "vertical",
                                    drag_block_vertical: false
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 1024,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "wait",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "single",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "off",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                });
            }
        },
        Search: function() {
            $('.search_open').on('click',function(){
                $('.cy_search_form').addClass('search_opened')  
            });
            $('.search_close').on('click',function(){
                $('.cy_search_form').removeClass('search_opened')  
            });
        },
       
		Popup:function(){
		   $('.cy_modal').on('click', function(){
			$('.modal-open #signin').hide();
			$('.modal-backdrop').hide();
			$('body').css('padding','0px');
			
		   })
		},
		Select:function(){
		  $('select:not(.ignore)').niceSelect();
		},
      
    };
    $(document).ready(function() {
        cycling.init();
    });
    //On load
    $(window).on('load', function() {
        var load;
        setTimeout(function() {
            $('body').addClass('load');
        }, 500);
    });

    // Window Scroll
    $(window).scroll(function() {
		var wh = window.innerWidth;
        if (wh > 767) {
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.cy_menu_wrapper').addClass('cy_fixed');
            } else {
                $('.cy_menu_wrapper').removeClass('cy_fixed');
            }
        }
        //Go to top
        if ($(this).scrollTop() > 100) {
            $('.cy_go_to').addClass('goto');
        } else {
            $('.cy_go_to').removeClass('goto');
        }

    });
    $(".cy_go_to").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });

})(jQuery);