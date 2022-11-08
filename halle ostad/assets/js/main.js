var swiper = new Swiper(".bts-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});


var swiper = new Swiper(".mynews", {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        520: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});


$(document).ready(function () {

    $('.bts-nav-btn').click(function (e) {
        e.stopPropagation();
    });
    $('.betis-nav-list').click(function (e) {
        e.stopPropagation();
    });
    $('.betis-bars').click(function (e) {
        e.stopPropagation();
    });

    $('.betis-bars').click(function () {

        $('.betis-nav-list').addClass('betis-nav-list-show');
        $('.bts-nav-btn').addClass('bts-nav-btn-show');


        $("body , html ").click(function () {
            $(".betis-nav-list").removeClass('betis-nav-list-show');
        });
        $("body , html ").click(function () {
            $(".bts-nav-btn").removeClass('bts-nav-btn-show');
        });

    });

    $('.ap-menu-close-btn').click(function () {
        $('.betis-nav-list').removeClass('betis-nav-list-show');
    });
    $('.ap-menu-close-btn').click(function () {
        $('.bts-nav-btn').removeClass('bts-nav-btn-show');
    });


});