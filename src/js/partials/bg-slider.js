$(document).ready(function(){
    const owl = $('.bg-slider');
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
        loop: true,
        autoplaySpeed: 5000
    });

    owl.trigger('play.owl.autoplay',[1000])

    window.owl = owl
});