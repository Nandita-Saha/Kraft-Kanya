// owl carousel 
$(document).ready(function () {
    $("#recent-post").owlCarousel({
        navigation: true,
        nav: true,
        dots: false,
        center: false,
        loop: true,
        margin: 30,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,

        // autoWidth:true
        responsive: {
            // breakpoint from 0 up
            1280: { items: 3 },
            0: { items: 3 },
            991: { items: 3 },
            767: { items: 2 },
            576: { items: 1 },
            480: { items: 1 },
            360: { items: 1 },
            320: { items: 1 }
        }
    });
});