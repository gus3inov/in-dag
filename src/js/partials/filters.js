$(document).ready(function(){
    const filters = document.querySelectorAll('.filter-select')
    let dataFilter = []
    let openFilterBtn = $('.open-filter'),
        categoriesFilterWrapp = $('.categories-filter-wrapper'),
        instanceFilter = []

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
            dataFilter.push(val.value)
            console.log(dataFilter)
            currentTarget.classList.add('option_picked')
        })

        instanceFilter.push(Select)
    })

    $('.select-target.option_picked').on('click', function(){
        console.log('click')
        $(this).parent('a').removeClass('option_picked')
    })


    let activeFilter = $('.categories-filter .tabs-header .active'),
        activeFilterPos = activeFilter.position()
    $('.categories-filter .tabs-header a').on('click', function () {
        activeFilter.removeClass('active')
        $(this).parent('li').addClass('active')
        activeFilter = $('.categories-filter .tabs-header .active')
        activeFilterPos = activeFilter.position()

        $('.categories-filter .border').stop().css({
            left: activeFilterPos.left,
            width: activeFilter.width()
        })
    })

    $('.filter-footer button[type="reset"]').on('click', function() {
        instanceFilter.forEach(function (instance) {
            console.log(instance.prototype.resetSelection)
        })
    })

    $('.filter-footer button[type="submit"]').on('click', function(){
        let activeType = $('.categories-filter .tabs-header .active a').attr('data-type')

        let promise = new Promise(function (resolve) {
            fetch('', {
                method: 'POST',
                body: {
                    method: activeType,
                    data: dataFilter
                }
            }).then(res => {
                resolve(res)
            })
        })

        return promise
    })

})