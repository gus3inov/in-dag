class HorizontalScroll {
    constructor({ slideWrapper, itemsScroll, scrollBody = document.documentElement }) {
        this._wrapper = typeof slideWrapper !== 'string' ? slideWrapper : document.querySelector(slideWrapper)
        this._items = document.querySelectorAll(itemsScroll) || this._wrapper.children
        this._offsetScroll = 0
        this._body = typeof scrollBody !== 'string' ? scrollBody : document.querySelector(scrollBody);
        this._wDelta = 10
        this._widthScroll = 0

        this.listenEvents()
        this.getWidth()
    }

    handleScroll(e) {
        if (!e) e = event

        e.preventDefault ? e.preventDefault() : e.returnValue = false

        let _delta = e.wheelDelta || -e.detail
            _delta /= Math.abs(_delta)

        this._offsetScroll += (_delta * this._wDelta)

        this.animateSlide(this._offsetScroll, 20)
    }

    animateSlide(move, duration){
        let axis = Math.sign(move),
            distanation = Math.abs(move) >= this._widthScroll ? this._widthScroll :  Math.abs(move)

        for(let i = 0; i < this._items.length; i++){
            let item = this._items[i];

            item.style.position = 'relative'

            if(axis === 1)
                setTimeout(() => {
                    item.style.transform = `translateX(${distanation}px)`
                }, duration * i)
            else if(axis === -1)
                setTimeout(() => {
                    item.style.transform = `translateX(-${distanation}px)`
                }, duration * i)
        }
    }

    getWidth(){
        let children = this._wrapper.children,
            isCollection = children.constructor.name === 'HTMLCollection'

        if(Array.isArray(children) || isCollection) {
            for(let i = 0; i < children.length; i++){
                this._widthScroll += children[i].offsetWidth / 2
            }
        }
        else {
            let widthChildren = children.offsetWidth

            this._widthScroll += widthChildren / 2
        }

        console.log(this._widthScroll)
    }

    listenEvents(){
        if(this._body.attachEvent){
            this._body.attachEvent('onmousewheel', this.handleScroll.bind(this))
        }else{
            this._body.addEventListener('DOMMouseWheel', this.handleScroll.bind(this), false)
            this._body.addEventListener('mousewheel', this.handleScroll.bind(this), false)
        }
    }
}

let listScroll_1 = document.querySelector('.categories-scroll_1'),
    listScroll_2 = document.querySelector('.categories-scroll_2')

const initHS = () => {
    if(listScroll_1 || listScroll_2){

        const scroll = new HorizontalScroll({
            slideWrapper: listScroll_1,
            itemsScroll: '.categories-scroll_1 .categories-list__item',
            scrollBody: '.categories'
        })

        const scroll2 = new HorizontalScroll({
            slideWrapper: listScroll_2,
            itemsScroll: '.categories-scroll_2 .categories-list__item',
            scrollBody: '.categories'
        })

    }else{
        return false
    }
}

initHS()