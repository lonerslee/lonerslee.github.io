(function($) {

    'use strict';

    /*
      Loading animation
    */

    $(window).on("load", function() {
        initPreloader();
        $(".preloader").delay(500).fadeOut("slow");
    });

    

     /* Responsive Slides (Architecture-Home) */
    $(function() {
        if ($("#slider1").length > 0) {
            $("#slider1").responsiveSlides({
                maxwidth: 1920,
                speed: 800
            });
        }
    });

    /* Four Box */
    if ($("#boxgallery").length > 0) { 
      new BoxesFx(document.getElementById('boxgallery'));
    }

    /*
      Parallax.js for all parallax effect
    */

    function initParallax() {
        if ($('.parallax-bg').length > 0) {
            $('.parallax-bg').parallax({
                speed: 0.5,
                zIndex: -100
            });
        }
    }

    /* 
      Slider Type Homepage Variation 
    */
    function initSliderTypist() {
        if (typeof Typist === 'function') {
            new Typist(document.querySelector('.typist-element'), {
                letterInterval: 60,
                textInterval: 3000
            });
        }
    }

    /*
      Bootstrap Full screen slider
    */

    function initFullScreenSlider() {
        var $item = $('.carousel .item');
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight);
        $item.addClass('full-screen');

        $('.carousel img').each(function() {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            $(this).parent().css({
                'background-image': 'url(' + $src + ')',
                'background-color': $color
            });
            $(this).remove();
        });

        $(window).on('resize', function() {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });

        $('.carousel').carousel({
            interval: 6000,
            pause: "false"
        });
    }

    /* Skill Bar Length Animation On Scroll */

    function initSkillBar() {
        var goScrolling = function(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };
        $('.progress .bar').data('width', $(this).width()).css({
            width: 0
        });
        $(window).on("scroll",function() {
            $('.progress .bar').each(function() {
                if (goScrolling($(this))) {
                    $(this).css({
                        width: $(this).attr('data-value') + '%'
                    });
                }
            });
        });
    }

    

    /* FitVids plugin for readjusting video sizes */

    function initFitVids() {
        $(".video-container").fitVids();
    }

    /* Scroll Icon Visibility Check */

    function initScrollIcon() {
        $(window).on("scroll",function() {
            if ($(this).scrollTop() > 400) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    };

    /* Scroll to Top */

    function initTopScroll() {
        $('.scroll-up a').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    };

    /* 
      Handling Form validation and Packaging the email information
      for sendmail.php file 
    */

    function initContactForm(argument) {
        $("#contact").on( "submit", function(e) {
            e.preventDefault();
            var name = $("#name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();
            var message = $("#message").val();
            var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

            function isValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
                $.ajax({
                    type: "POST",
                    url: "sendmail.php",
                    data: dataString,
                    success: function() {
                        $('.success').fadeIn(1000);
                        $('.error').fadeOut(500);
                    }
                });
            } else {
                $('.error').fadeIn(1000);
                $('.success').fadeOut(500);
            }
            return false;
        });
    }

    /*
      Google Map from Snazzy Maps : Dark Edition 
     */

    

    /*
      Google Map from Snazzy Maps : Regular Edition 
     */

    function initGoogleMaps() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            disableDefaultUI: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.7127, -74.0059), // New york

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                }, {
                    "lightness": 21
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#333333"
                }, {
                    "lightness": 40
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.7127, -74.0059),
            map: map,
            title: 'Find us here!'
        });
    }

    /*
      Loading animation creator using modernizr
    */

    var support = {
            animations: Modernizr.cssanimations
        },
        container = document.getElementById('ip-container'),
        header = container.querySelector('.ip-header'),
        loader = new PathLoader(document.getElementById('ip-loader-circle')),
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

    /*
      Preloading animation
    */

    function initPreloader() {
        var onEndInitialAnimation = function() {
            if (support.animations) {
                this.removeEventListener(animEndEventName, onEndInitialAnimation);
            }
            startLoading();
        };
        // initial animation
        classie.add(container, 'loading');
        if (support.animations) {
            container.addEventListener(animEndEventName, onEndInitialAnimation);
        } else {
            onEndInitialAnimation();
        }
    }

    /* Loading animation kick-off */

    function startLoading() {
        // simulate loading something..
        var simulationFn = function(instance) {
            var progress = 0,
                interval = setInterval(function() {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);
                    // reached the end
                    if (progress === 1) {
                        classie.remove(container, 'loading');
                        classie.add(container, 'loaded');
                        clearInterval(interval);
                        var onEndHeaderAnimation = function(ev) {
                            if (support.animations) {
                                if (ev.target !== header) return;
                                this.removeEventListener(animEndEventName, onEndHeaderAnimation);
                            }
                        };
                        if (support.animations) {
                            header.addEventListener(animEndEventName, onEndHeaderAnimation);
                        } else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80);
        };
        loader.setProgressFn(simulationFn);
    }

    /* Height calculation for 100vh */

    var win_ht = $(window).height();
    ;
    (function() {
        $('.extra-page-win-ht').css({
            'height': win_ht,
            'position': 'relative'
        });
    })();

    /* Mobile responsive navbar triggerring */

    if (matchMedia('(max-width: 480px)').matches) {
        $('.main-navigation a').on('click', function() {
            $(".navbar-toggle").click();
        });
    }

    /* Responsive sticky-nav (for Mobile Devices) */

    function mainNav60() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) {
            $('.sticky-navigation').stop().animate({
                "top": '0'
            });
        } else {
            $('.sticky-navigation').stop().animate({
                "top": '-60'
            });
        }
    }

    function mainNav120() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) {
            $('.sticky-navigation').stop().animate({
                "top": '0'
            });
        } else {
            $('.sticky-navigation').stop().animate({
                "top": '-120'
            });
        }
    }

    /* Device size checks for responsive sticky-nav */

    if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
        $(window).on("scroll",function() {
            mainNav60();
        });
    }

    if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
        $(window).on("scroll",function() {
            mainNav120();
        });
    }

    /* 
      All the functions on document.ready() state 
      are listed here
    */

    $(document).on("ready", function() {

        $('.sticky-navigation').onePageNav({
            scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
            filter: ':not(.external)',
            changeHash: true
          });

        /* Responsive sticky-nav */
        if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
            mainNav60();
        }
        if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
            mainNav120();
        }

        /* Aya Slider */
        if ($('#slideShow').length > 0) {
            $('#slideShow').ayaSlider({
                easeIn: 'easeOutBack',
                easeOut: 'linear',
                delay: 4000,
                timer: $('#timer'),
                previous: $('.prev'),
                next: $('.next'),
                list: $('.slideControl')
            });
        }

        initSkillBar();

        /*
         * PopUp Item Script
         */
        if ($('.popup-video').length > 0) {
            $('.popup-video').magnificPopup({
                //disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: true
            });
        }

        /* Flexslider */
        if ($('.flexslider').length > 0) {
            $('.flexslider').flexslider({
                animation: "fade",
                directionNav: false,
            });
        }

        /*
          All Owl Carousel
        */
        if ($("#work-carousel").length > 0) {
            $("#work-carousel").owlCarousel({
                loop: true,
                autoPlay: 2000,
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        }
        if ($("#content-slider").length > 0) {
            $("#content-slider").owlCarousel({
                slideSpeed: 350,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true,
                autoHeight: true,
                navigation: false
            });
        }
        if ($("#team-carousel").length > 0) {
            $("#team-carousel").owlCarousel({
                loop: true,
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        }
        if ($("#feedbacks").length > 0) {
            $("#feedbacks").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 400,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true
            });
        }
        if ($("#feedbacks-2").length > 0) {
            $("#feedbacks-2").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 400,
                paginationSpeed: 800,
                autoPlay: 5000,
                singleItem: true
            });
        }
        if ($("#feedbacks-const").length > 0) {
            $("#feedbacks-const").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 400,
                paginationSpeed: 800,
                autoPlay: 5000,
                items: 2
            });
        }
        /*
          Bootstrap Carousel
        */
        if ($("#tt-carousel").length > 0) {
            $('#tt-carousel').carousel({
                interval: 5000,
                pause: "false"
            });
        }

       
        /*
        Text Rotator
        */
        if ($(".rotate").length > 0) {
            $(".rotate").textrotator({
                animation: "dissolve",
                separator: ",",
                speed: 2000
            });
        }
    });
    
    /* 
      Accordion Effect
    */  
    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function() {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });
    $(".accordion > dt > a").on( "click", function() {
        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");
        return false;
    });

    /* Smoothscroll Effect */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').on('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });

    /* Wow animation config */  
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    /* Waypoints for funfactor */
    var waypoints = $('#funfactor').waypoint(function(direction) {
        if (direction = 'up') {
            $(".timer").countTo({
                speed: 5000
            })
        }
    }, {
        offset: '60%'
    });

    /* Google Map load */
    if ($("#map").length > 0) {
        // When the window has finished loading create our google map below
        var googleMaps = google.maps.event.addDomListener(window, 'load', initGoogleMaps);
    } else if ($("#map2").length > 0) {
        var googleMaps = google.maps.event.addDomListener(window, 'load', initGoogleMapsDark);
    }

    /*
      Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
    */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }

    function initCustom() {
        // Add your custom javascript here
    }

    /* Init All Functions */
    function initAll() {
        // initParallax();
        initFullScreenSlider();
        initSliderTypist();
        initTopScroll();
        initScrollIcon();
        initContactForm();
        initFitVids();
    }

    initAll();

})(jQuery) 