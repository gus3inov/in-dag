const initBgSlider = ( node ) => {
    node.slick({
        autoplay: true,
        arrows: false,
        draggable: false,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        fade: true
    });
};

export default initBgSlider;