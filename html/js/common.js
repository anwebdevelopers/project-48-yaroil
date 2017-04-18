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

});
