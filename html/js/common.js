$(function() {

    'use strict';

    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
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
            if (windowHeight > $header.height() && windowWidth > 640) {
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
        smartSpeed: 600,
        autoHeight: true
    });

    //---------------------------------------------------------------
    //Слайдер clients
    //---------------------------------------------------------------

    $('.clients__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: '',
        smartSpeed: 600,
        autoHeight: true
    });

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
    });

    //------------------------------------
    //Выравнивание блоков по высоте
    //------------------------------------

    $(".selection__item-title").equalHeight({
        responsive: true
    });


    //---------------------------------------------------------------
    //Слайдер gallery
    //---------------------------------------------------------------
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

    //------------------------------------
    //Hover fo IOS
    //------------------------------------
    $('.gallery__item').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })

});
