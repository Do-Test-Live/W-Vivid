$(function (e) {
    "use strict";
    var s;
    e(window).on("load", function () {
        e(".se-pre-con").fadeOut("slow")
    }), e(".mean-menu").meanmenu({meanScreenWidth: "992"}), e(window).on("scroll", function () {
        e(this).scrollTop() > 100 ? e(".navbar-area").addClass("is-sticky") : e(".navbar-area").removeClass("is-sticky")
    }), e('a[href="#search"]').on("click", function (s) {
        s.preventDefault(), e("#search").addClass("open"), e('#search > form > input[type="search"]').focus()
    }), e("#search, #search button.close").on("click keyup", function (s) {
        (s.target == this || "close" == s.target.className || 27 == s.keyCode) && e(this).removeClass("open")
    }), e(window).scroll(function () {
        e(this).scrollTop() >= 100 ? e("#return-to-top").fadeIn(200) : e("#return-to-top").fadeOut(200)
    }), e("#return-to-top").on("click", function () {
        e("body,html").animate({scrollTop: 0}, 500)
    }), e("#options").flagStrap({
        countries: {HK: "中文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",US: "English"},
        buttonSize: "btn-sm",
        buttonType: "btn-info",
        labelMargin: "10px",
        scrollable: !1,
        scrollableHeight: "350px",
        onSelect: function (value, element) {
            let chinaURL = window.location.pathname.split("/");
            let result = chinaURL[chinaURL.length - 1]; // Or parts.pop();
            let urls = {
                "HK": window.location.protocol + '//' + window.location.host+'/Chinese'+window.location.pathname,
                "US": window.location.protocol + '//' + window.location.host+'/'+result,
            };
            document.location.href = urls[value];
            console.log(element);
        }
    }), e(".quantity-button").off("click").on("click", function () {
        if (e(this).hasClass("quantity-add")) {
            var s = parseInt(e(this).parent().find("input").val()) + 1;
            e(this).parent().find("input").val(s).trigger("change")
        }
        if (e(this).hasClass("quantity-remove")) {
            var o = parseInt(e(this).parent().find("input").val()) - 1;
            0 == o && (o = 1), e(this).parent().find("input").val(o).trigger("change")
        }
    }), e(".video-btn").on("click", function () {
        s = e(this).data("src")
    }), e("#myModalVideo").on("shown.bs.modal", function (o) {
        e("#video").attr("src", s + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
    }), e("#myModalVideo").on("hide.bs.modal", function (o) {
        e("#video").attr("src", s)
    }), e(".testimonial-slider-slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        focusOnSelect: !0,
        dots: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        appendDots: e(".custom-paging-testi"),
        responsive: [{breakpoint: 767, settings: {autoplay: !1}}, {breakpoint: 420, settings: {autoplay: !1}}]
    }), e("a[data-slide]").click(function (s) {
        s.preventDefault();
        var o = e(this).data("slide");
        e(".testimonial-slider-slick").slick("slickGoTo", o - 1)
    }), e(".portfolio-slider-wrap").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="prev-port"><i class="bx bx-arrow-back"></i></button>',
        nextArrow: '<button class="next-port"><i class="bx bx-arrow-back bx-rotate-180" ></i></button>',
        focusOnSelect: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 3}}, {
            breakpoint: 991,
            settings: {slidesToShow: 2}
        }, {breakpoint: 720, settings: {slidesToShow: 1}}]
    }), e(".partner-logo-slider").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: !1,
        focusOnSelect: !0,
        dots: !1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{breakpoint: 992, settings: {slidesToShow: 3, autoplay: !0}}, {
            breakpoint: 768,
            settings: {slidesToShow: 2, autoplay: !0}
        }, {breakpoint: 420, settings: {slidesToShow: 1, autoplay: !0}}]
    }), e(".portfolio-item-slider").slick({
        arrows: !1,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        slidesToShow: 1,
        centerMode: !0,
        centerPadding: "25%",
        responsive: [{
            breakpoint: 1100,
            settings: {slidesToShow: 1, centerMode: !0, centerPadding: "20%"}
        }, {breakpoint: 991, settings: {slidesToShow: 1, centerMode: !0, centerPadding: "10%"}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, centerPadding: "5%"}
        }]
    }), e(document).on("click", ".prevSlide", function () {
        e(".portfolio-item-slider").slick("slickPrev")
    }), e(document).on("click", ".nextSlide", function () {
        e(".portfolio-item-slider").slick("slickNext")
    }), e(document).on("click", ".filter-option-portfolio li a", function () {
        e(".filter-option-portfolio li a").removeClass("active"), e(this).addClass("active");
        var s = e(this).attr("data-category");
        "all" !== s ? (e(".portfolio-item-slider").slick("slickUnfilter"), e(".portfolio-item-slider li").each(function () {
            e(this).removeClass("slide-shown")
        }), e(".portfolio-item-slider li[data-match=" + s + "]").addClass("slide-shown"), e(".portfolio-item-slider").slick("slickFilter", ".slide-shown")) : (e(".portfolio-item-slider li").each(function () {
            e(this).removeClass("slide-shown")
        }), e(".portfolio-item-slider").slick("slickUnfilter"))
    }), e(".testimonial-slider-v3").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: ".prev-testim",
        nextArrow: ".next-testim",
        focusOnSelect: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 1}}, {
            breakpoint: 991,
            settings: {slidesToShow: 1}
        }, {breakpoint: 720, settings: {slidesToShow: 1}}]
    }), e(".similar-slider-wrap").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: ".prev-similar",
        nextArrow: ".next-similar",
        focusOnSelect: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        infinite: !1,
        responsive: [{breakpoint: 992, settings: {slidesToShow: 2, autoplay: !0}}, {
            breakpoint: 768,
            settings: {slidesToShow: 1, autoplay: !0}
        }, {breakpoint: 420, settings: {slidesToShow: 1, autoplay: !0}}]
    }), e(".testimonial-slider-v3_1").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        focusOnSelect: !0,
        dots: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        responsive: [{breakpoint: 992, settings: {slidesToShow: 2, autoplay: !0}}, {
            breakpoint: 768,
            settings: {slidesToShow: 1, autoplay: !0}
        }, {breakpoint: 420, settings: {slidesToShow: 1, autoplay: !0}}]
    }), e(".testimonial-slider-v3_2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: '<button class="prev-testi_v3"><i class="bx bx-arrow-back"></i></button>',
        nextArrow: '<button class="next-testi_v3"><i class="bx bx-arrow-back bx-rotate-180" ></i></button>',
        focusOnSelect: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 5e3
    }), e(".product-main-image-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".product-navigation-slider",
        touchMove: !1,
        verticalSwiping: !0,
        focusOnSelect: !0
    }), e(".product-navigation-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product-main-image-slider",
        dots: !1,
        arrows: !1,
        centerMode: !1,
        focusOnSelect: !0,
        vertical: !0,
        swipe: !1,
        responsive: [{breakpoint: 992, settings: {vertical: !0}}, {
            breakpoint: 768,
            settings: {vertical: !1, slidesToShow: 4}
        }, {breakpoint: 580, settings: {vertical: !1, slidesToShow: 3}}, {
            breakpoint: 380,
            settings: {vertical: !1, slidesToShow: 3}
        }]
    }), e(".related-products-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: !0,
        prevArrow: ".prev-rlts",
        nextArrow: ".next-rlts",
        focusOnSelect: !0,
        dots: !1,
        autoplay: !1,
        autoplaySpeed: 5e3,
        infinite: !1,
        responsive: [{breakpoint: 1100, settings: {slidesToShow: 3, autoplay: !0}}, {
            breakpoint: 991,
            settings: {slidesToShow: 2, autoplay: !0}
        }, {breakpoint: 500, settings: {slidesToShow: 1, autoplay: !0}}]
    }), null != document.getElementById("slider-range") && (e("#slider-range").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [100, 250],
        slide: function (s, o) {
            e("#amount").val("$" + o.values[0] + " - $" + o.values[1])
        }
    }), e("#amount").val("$" + e("#slider-range").slider("values", 0) + " - $" + e("#slider-range").slider("values", 1))), null != document.getElementById("slider-range2") && (e("#slider-range2").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [100, 250],
        slide: function (s, o) {
            e("#amount2").val("$" + o.values[0] + " - $" + o.values[1])
        }
    }), e("#amount2").val("$" + e("#slider-range2").slider("values", 0) + " - $" + e("#slider-range2").slider("values", 1))), AOS.init({
        duration: 1e3,
        mirror: !1,
        disable: function () {
            return window.innerWidth < 1100
        }
    })
});

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'+');
        }
    });
});


