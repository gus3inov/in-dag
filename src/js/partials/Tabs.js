$(document).ready(function () {

class Tabs {
    constructor({ baseDom, baseDomNav = baseDom, baseDomDisplay = baseDom}){
        this._wrapperNav = baseDomNav
        this._wrapperDisplay = baseDomDisplay
        this._activeTab = $(`${this._wrapperNav} .tabs-header .active`)
        this._tabActiveContent = $(`${this._wrapperNav} .tab.active`)
        this._tabActiveContentHeight = this._tabActiveContent .height()
        this._getTabId = null
        this._tabId = null
        this._tab = $(`${this._wrapperNav} .tab`)
        this._tabBtn = $(`${this._wrapperNav} .tabs-header a`)
        this._tabItems = $(`${this._wrapperNav} .tabs-header ul li`)
        this._tabCurrentItem = this._tabItems.filter('.active')
        this._border = $(`${this._wrapperNav} .border`)

        this.changePos()
        this.animateTabHeight()
        this.handleClick()
    }

    changePos(){
        this._activeTab = $(`${this._wrapperNav} .tabs-header .active`)
        let activeTabPos = this._activeTab.position()

        this._border.stop().css({
            left: activeTabPos.left,
            width: this._activeTab.width()
        })

    }

    animateTabHeight(){
        this._tabActiveContentHeight = this._tabActiveContent.height() + 30;

        $(`${this._wrapperNav} .tabs-content`).stop().css({
            height: this._tabActiveContentHeight + 'px'
        });
    }

    changeTab(){
        this._getTabId = $(`${this._wrapperNav} .tabs-header .active a`).attr('tab-id')

        this._tab.stop().fadeOut(300, function(){
            $(this).removeClass('active')
        }).hide()

        $(`${this._wrapperNav} .tab[tab-id='${this._getTabId}']`).stop().fadeIn(300, function(){
            $(this).addClass('active')

            this.animateTabHeight.bind(this)
        })
    }

    handleClick(){
        let self = this

        this._tabBtn.on('click', (e) => {
            e.preventDefault()
            let currentTarget = e.target.closest('a')

            this._tabId = $(currentTarget).attr('tab-id')

            this._tabBtn.stop().parent().removeClass('active')

            $(currentTarget).stop().parent().addClass('active')

            this.changePos()

            this._tabCurrentItem = this._tabItems.filter('.active')

            this._tab.stop().fadeOut(300, function () {
                $(this).removeClass('active')
            }).hide()

            $(`${this._wrapperDisplay} .display`).stop().fadeOut(300,  function() {
                $(this).removeClass('active')
            }).hide()

            $(`${this._wrapperNav} .tab[tab-id='${this._tabId}']`).stop().fadeIn(300, function() {
                $(currentTarget).parent().addClass('active')

                self.animateTabHeight()
            })

            $(`${this._wrapperDisplay} .display[tab-id='${this._tabId}']`).stop().fadeIn(300, function() {
                $(this).addClass('active')

                self.animateTabHeight()
            })

        })
    }
}

window.Tabs = Tabs;

    const filterTab = new Tabs({
        baseDom: '.categories-filter'
    })

})