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
    $('.production__slider').each(function() {

    });
    $('.production__slider-item').each(function() {
        $(this).prepend('<div class="production__slider-numeral"><span class="production__slider-number">' + ($(this).index() + 1) + '</span>\\<span class="production__slider-quantity">' + $(this).closest('.production__slider').find('.production__slider-item').length + '</span></div>');
    });


    //---------------------------------------------------------------
    //Слайдер
    //---------------------------------------------------------------

    $('.production__slider').addClass('swiper-container').wrapInner('<div class="swiper-wrapper"></div>').append('<div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
    $('.production__slider-item').addClass('swiper-slide');
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 1,
        speed: 600,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
    });

});
