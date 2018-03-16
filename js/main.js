$(document).ready(function(){
    $('.slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
    });
    $('.header__open-nav').on('click', function (event) {
        event.preventDefault();
        $('.main-nav').toggleClass('main-nav--closed');
    });

    $('.main-nav__item').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
        $('.main-nav').addClass('main-nav--closed');
    });

    $('.footer__link').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });

    $('.btn-to-up').on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1200);
    });
});