$(document).ready(function(){
    
        $('.slickSlider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 900,
            infinite: true,
            centerMode: false,
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

    if(pageYOffset <= 665){
        $(".navbar").removeClass("second_navbar");
        $(".navbar").addClass("first_nav");
    }
    else{
        $(".navbar").addClass("second_navbar");
        $(".navbar").removeClass("first_nav");
      }
      
      
        $(window).on("scroll", function () {
      
          if(pageYOffset >= 665){
            $(".navbar").addClass("second_navbar");
            $(".navbar").removeClass("first_nav");
          }else{
            $(".navbar").removeClass("second_navbar");
            $(".navbar").addClass("first_nav");
          }
        });
      
});

