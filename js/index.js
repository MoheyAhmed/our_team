$(document).ready(function(){
    
    $('.slickSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        infinite: true,
        centerMode: true,
    });
    
    $("#btn").click(function() {
        window.scrollTo({ top: 550, behavior: 'smooth'});
    });
});

