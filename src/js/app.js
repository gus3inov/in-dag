import HScrollView from './views/HScrollView';
import HScrollModel from './models/HScrollModel';
import HScrollController from './controllers/HScrollController';
import { fadeIn, fadeOut } from './helpers/BaseDom';
import initBgSlider from './components/bg-slider';
import Modal from './helpers/Modal';

/**
 * @feature About us modal
 */

const   modalAboutWrap      = document.querySelector('.modal-about'),
        openModalAboutBtn   = document.querySelector('.modal-about_open'),
        closeModalAboutBtn  = document.querySelector('.modal-about_close');

const modalAbout = new Modal({
    modal: modalAboutWrap,
    openBtn: openModalAboutBtn,
    closeBtn: closeModalAboutBtn,
    duration: 200
});

/**
 * @feature Categories toggle -> categories.html
 */

const showCategory = document.querySelector('.btn.open_categories'),
    categoryItems = document.querySelectorAll('.categories-list .categories-list__item');

if(showCategory !== null && categoryItems !== null){
    showCategory.addEventListener('click', function () {
        this.classList.toggle('back');

        for(let i = 0; i < categoryItems.length; i++){
            categoryItems[i].classList.toggle('visible');
            setTimeout(function () {
                categoryItems[i].classList.toggle('visually_visible');
            }, 20 * i)
        }
    });
}

/**
 * @feature Horizontal scroll -> categories.html
 */

let listScroll_1 = document.querySelector('.categories-scroll_1'),
    listScroll_2 = document.querySelector('.categories-scroll_2');

if (listScroll_1 !== null && listScroll_2 !== null) {

    const scrollModel = new HScrollModel({
            slideWrapper: listScroll_1,
            itemsScroll: '.categories-scroll_1 .categories-list__item',
            scrollBody: '.categories',
            toggleButton: showCategory
        }),
        scrollView = new HScrollView(scrollModel),
        scrollController = new HScrollController(scrollView, scrollModel);

    scrollController.scrollItems();

    const scrollModel2 = new HScrollModel({
            slideWrapper: listScroll_2,
            itemsScroll: '.categories-scroll_2 .categories-list__item',
            scrollBody: '.categories',
            toggleButton: showCategory
        }),
        scrollView2 = new HScrollView(scrollModel2),
        scrollController2 = new HScrollController(scrollView2, scrollModel2);

    scrollController2.scrollItems();
}

/**
 * @feature Toggle sidebar -> index.html
 */

let sidebarMenu = document.querySelector('.sidebar-menu'),
    sidebarBtn = document.querySelector('button[data-open="sidebar"]');

if (sidebarBtn !== null && sidebarMenu !== null) {

    sidebarBtn.addEventListener('click', function () {
        if (sidebarMenu.classList.contains('visible')) {
            sidebarMenu.classList.remove('visible');
            fadeOut(sidebarMenu, 300);
        } else {
            sidebarMenu.classList.add('visible');
            fadeIn(sidebarMenu, 300);
        }
    });
}

/**
 * @feature Init bg-slider -> bg-slider.html
 */

const bg_slider = $('.bg-slider');

if(bg_slider.length !== 0){
    initBgSlider(bg_slider);
}


