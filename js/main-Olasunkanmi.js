$(window).scroll(function () {
    $('header').toggleClass('bg__scroll', $(this).scrollTop() > 100);
});

$(document).ready(function () {
    $('.hero__background-carousel').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        cssEase: 'ease-out',
        useTransform: true,
        arrows: false,
        dots: false,
    });

    $('.community__speaks').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        speed: 500,
        centerPadding: '60px',

        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.interest__container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$(document).ready(function () {
    $(window).on('load', function () {
        $('.hero').css("background-color", "rgba(0,0,0,1)");
    });
});