$(document).ready(function () {
    const showCategory = $('.btn.open_categories')
    const categoryItems = document.querySelectorAll('.categories-list .categories-list__item')

    showCategory.on('click', function () {
        $(this).toggleClass('back')

        for(let i = 0; i < categoryItems.length; i++){
            categoryItems[i].classList.toggle('visible')
            setTimeout(function () {
                categoryItems[i].classList.toggle('visually_visible')
            }, 20 * i)
        }
    })


})