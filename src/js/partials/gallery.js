$(document).ready(function () {

    const   galleryPhotoDisplay      = $('.gallery-display .gallery-display__slider.photo'),
            galleryPhotoNav          = $('.gallery-photo__nav'),
            galleryVideoDisplay      = $('.gallery-display .gallery-display__slider.video'),
            galleryVideoNav          = $('.gallery-video__nav')


    galleryPhotoDisplay.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.gallery-photo__nav',
            prevArrow: '<div class="wrapp-slick__button prev"><button type="button" class="slick-prev"></button></div>',
            nextArrow: '<div class="wrapp-slick__button next"><button type="button" class="slick-next"></button></div>'
        });

    galleryPhotoNav.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.gallery-display__slider.photo',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            infinite: false
        });

    galleryVideoDisplay.slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-video__nav'
    });

    galleryVideoNav.slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.gallery-display__slider.video',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: false
    });

    $("[data-fancybox]").fancybox({
        loop: true,
        slideShow : {
            autoStart : true,
            speed     : 5000
        }
    });

});