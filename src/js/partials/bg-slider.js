$(document).ready(function(){
    const bg_slider = $('.bg-slider');

        bg_slider.slick({
            autoplay: true,
            arrows: false,
            draggable: false,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            infinite: true
        })
});