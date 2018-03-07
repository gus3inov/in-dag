$(document).ready(function(){
    const filters = document.querySelectorAll('.filter-select');
    let openFilterBtn = $('.open-filter'),
        categoriesFilterWrapp = $('.categories-filter-wrapper');

    openFilterBtn.on('click', function () {
        openFilterBtn.toggleClass('active')
        console.log(categoriesFilterWrapp)
        if(categoriesFilterWrapp.hasClass('visible')){
            categoriesFilterWrapp.toggleClass('visually_visible')

            setTimeout(function () {
                categoriesFilterWrapp.toggleClass('visible')
            }, 200)
        }else {
            categoriesFilterWrapp.toggleClass('visible')

            setTimeout(function () {
                categoriesFilterWrapp.toggleClass('visually_visible')
            }, 100)
        }
    })
    
    filters.forEach(filter => {
        new Select({
            el: filter,
            selector: '.categories-filter',
            className: 'select-theme-dark'
        }).on('change', function (val) {
            let currentTarget = filter.nextSibling

            currentTarget.classList.add('option_picked')
        })

    })

});