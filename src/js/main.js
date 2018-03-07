
//= ./partials/Scroll.js
//= ./partials/Tabs.js
//= ./partials/filters.js
//= ./partials/gallery.js
//= ./partials/categories.js
//= ./partials/bg-slider.js

let sidebarMenu = $('.sidebar-menu')
$('button[data-open="sidebar"]').on('click', function () {
    if(sidebarMenu.hasClass('visible')){
        sidebarMenu.toggleClass('visually_visible')

        setTimeout(function () {
            sidebarMenu.toggleClass('visible')
        }, 300)
    }else {
        sidebarMenu.toggleClass('visible')

        setTimeout(function () {
            sidebarMenu.toggleClass('visually_visible')
        }, 100)
    }
})