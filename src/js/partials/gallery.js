$(document).ready(function () {

    const galleryDisplay = $('.gallery-display .gallery-display__slider')
    const galleryNav = $('.gallery-photo__nav')

        galleryDisplay.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.gallery-photo__nav',
            prevArrow: '<div class="wrapp-slick__button prev"><button type="button" class="slick-prev"></button></div>',
            nextArrow: '<div class="wrapp-slick__button next"><button type="button" class="slick-next"></button></div>'
        });

        galleryNav.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.gallery-display__slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            infinite: false
        });
});