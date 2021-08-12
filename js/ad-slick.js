$(document).ready(function () {
    $(".adv-slick").slick({

        // dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        // draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
});