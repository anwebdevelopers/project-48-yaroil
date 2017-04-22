$(function() {

    'use strict';

    //------------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------------
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------
    //fullscreen header for IE
    //------------------------------------------------------------

    var $header = $('.header');

    function fullscreen() {
        if($('html').hasClass('ie') || $('html').hasClass('gecko')) {
            $header.removeAttr('style');
            var windowHeight = $(window).height(),
                windowWidth = $(window).width(),
                headerHeight = $header.height();
            if (windowHeight > $header.height() && windowWidth > 992) {
                $header.css({
                    'height' : windowHeight + 'px'
                });
            }
        }
    }

    fullscreen();

    $(window).resize(function() {
        fullscreen();
    });

    //---------------------------------------------------------------
    //Подсчет итемов в слайдере отзывов и вывод на страницу
    //---------------------------------------------------------------
    $('.production__item').each(function() {
        $(this).prepend('<div class="production__item-numeral"><span class="production__item-number">' + ($(this).index() + 1) + '</span>\\<span class="production__item-quantity">' + $(this).closest('.production__slider').find('.production__item').length + '</span></div>');
    });


    //---------------------------------------------------------------
    //Слайдер production
    //---------------------------------------------------------------

    $('.production__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: '',
        smartSpeed: 600
    });

    //---------------------------------------------------------------
    //Слайдер clients
    //---------------------------------------------------------------

    $('.clients__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: '',
        smartSpeed: 600
    });

    //------------------------------------------------------------
    // Плавный скролл
    //------------------------------------------------------------

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
    });

    //------------------------------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------------------------------

    $(".selection__item-title").equalHeight({
        responsive: true
    });


    //------------------------------------------------------------
    //Слайдер gallery
    //------------------------------------------------------------
    $('.gallery__slider').addClass('owl-carousel').owlCarousel({
        nav: true,
        navText: '',
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            993: {
                items: 3
            }
        }
    });

    //------------------------------------------------------------
    //Hover fo IOS
    //------------------------------------------------------------
    $('.gallery__item').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });

    //------------------------------------------------------------
    //popup
    //------------------------------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //------------------------------------------------------------
    // Анимация появления элементов
    //------------------------------------------------------------

    $('.about__item-icon').animated("zoomIn");
    $('.about__item-text, .advantages__item').animated("fadeInUp");
    $('.scheme__item').animated("fadeIn");

    //------------------------------------------------------------
    // Google Map
    //------------------------------------------------------------
    var markerPositions = new Array();
    	markerPositions[1] = new google.maps.LatLng(57.551825, 39.925649);

    function initialize() {
        var loc, map;

        loc = new google.maps.LatLng(57.551825, 39.925649);

        map = new google.maps.Map(document.getElementById("map"), {
             zoom: 16,
             center: loc,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scrollwheel: false
        });

        var iconlink = 'img/';
        for(var i in markerPositions) {
          var markerPosition = markerPositions[i];

          var marker = new google.maps.Marker({
              map: map,
              position: markerPosition,
              visible: true,
              icon: iconlink + 'icon-map.png'
          });
        }

        map.set('styles', [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ccc"},{"lightness":20},{"saturation":-97}]}]);
    }
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);

});
