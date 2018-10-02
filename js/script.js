/*global $, window*/
$(function () {
    "use strict";
    
    /// set scroll for slider
    $(".testimonials__boxes").scrollLeft($(".testimonials__box").innerWidth() - 60);
    
    ///// scroll on click for the slider
    var testemonialScroll = $(".testimonials__boxes").scrollLeft();
    $(".testimonials__opinions .next").on("click", function () {
        testemonialScroll  = testemonialScroll + $(".testimonials__box").innerWidth();
        $(".testimonials__boxes").animate({
            scrollLeft: testemonialScroll
        }, 300);
    });
    
    $(".testimonials__opinions .prev").on("click", function () {
        testemonialScroll  = testemonialScroll - $(".testimonials__box").innerWidth();
        $(".testimonials__boxes").animate({
            scrollLeft: testemonialScroll
        }, 300);
    });
    
    
    //// scroll top icon
    $(window).on("scroll", function () {
        var wScroll = $(window).scrollTop(),
            wHeight = $(window).innerHeight();
        if (wScroll > wHeight + 100) {
            $(".go-top").fadeIn(300);
        }
    });
    
    $(".go-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });
    
    ////
    $(window).on("resize", function () {
        $(".container").css({
            overflowX: "hidden"
        });
    });
    
    
    
});

