$(document).ready(function(){
    const filters = document.querySelectorAll('.filter-select')

    $('.open-filter').on('click', function () {
        $('.categories-filter-wrapper').toggleClass('visible')
        $('button.open-filter').toggleClass('active')

        setTimeout(function () {
            $('.categories-filter-wrapper').toggleClass('visually_visible')
        }, 100)
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