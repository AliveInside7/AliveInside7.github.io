
$(document).ready(function () {
    $("#comments-slider").owlCarousel({
    navigation: false,
    slideSpeed: 100,
    paginationSpeed: 800,
    singleItem: true,
    autoPlay: false
    });
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        padding: 0.1,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })