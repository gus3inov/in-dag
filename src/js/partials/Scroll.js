class Scroll {
    constructor({ slideWrapper, itemsScroll }) {
        this._wrapper = typeof slideWrapper !== 'string' ? slideWrapper : document.querySelector(slideWrapper)
        this._items = document.querySelectorAll(itemsScroll) || this._wrapper.children
        this._offsetScroll = 0
        this._body = document.documentElement;
        this._wDelta = 10

        this.listenEvents()
        this.getWidth()
    }

    scrollDoc(e) {
        if (!e) e = event

        e.preventDefault ? e.preventDefault() : e.returnValue = false
        this._offsetScroll++;

        let _delta = e.wheelDelta || -e.detail
        _delta /= Math.abs(_delta)

        this._offsetScroll += (_delta * this._wDelta)

        for(let i = 0; i < this._items.length; i++){
           let item = this._items[i];

           item.style.position = 'relative'
            setTimeout(() => {
                item.style.transform = `translateX(${this._offsetScroll}px)`
            }, 30 * i)
        }
    }

    getWidth(){

    }

    listenEvents(){
        if(this._body.attachEvent){
            this._body.attachEvent('onmousewheel', this.scrollDoc.bind(this))
        }else{
            this._body.addEventListener('DOMMouseWheel', this.scrollDoc.bind(this), false)
            this._body.addEventListener('mousewheel', this.scrollDoc.bind(this), false)
        }
    }
}

let listScroll_1 = document.querySelector('.categories-scroll_1'),
    listScroll_2 = document.querySelector('.categories-scroll_2')


if(listScroll_1 || listScroll_2){
    const scroll = new Scroll({
        slideWrapper: listScroll_1,
        itemsScroll: '.categories-scroll_1 .categories-list__item'
    })

    const scroll2 = new Scroll({
        slideWrapper: listScroll_2,
        itemsScroll: '.categories-scroll_2 .categories-list__item'
    })

}else{
    console.log('lol')
}