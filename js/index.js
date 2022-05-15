$(document).ready(function(){
    
        $('.slickSlider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 900,
            infinite: true,
            centerMode: true,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    centerMode: false,
                  },
                },
                {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                  },
                },
                
            ],
        });


    
    $("#btn").click(function() {
        window.scrollTo({ top: 550, behavior: 'smooth'});
    });
});

