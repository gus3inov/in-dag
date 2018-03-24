export default class HScrollModel{
    constructor({
        slideWrapper,
        itemsScroll,
        toggleButton,
        scrollBody = document.documentElement
                })
    {
        this._wrapper = typeof slideWrapper !== 'string' ? slideWrapper : document.querySelector(slideWrapper);
        this._items = document.querySelectorAll(itemsScroll) || this._wrapper.children;
        this._btn = typeof toggleButton !== 'string' ? toggleButton : document.querySelector(toggleButton);
        this._body = typeof scrollBody !== 'string' ? scrollBody : document.querySelector(scrollBody);
        this._width = 0;
    }

    getBtn(){
        return this._btn;
    }

    getItems(){
        return this._items;
    }

    getWidth(){
        let children = this._wrapper.children,
            isCollection = children.constructor.name === 'HTMLCollection'

        if(Array.isArray(children) || isCollection) {
            for(let i = 0; i < children.length; i++){
                this._width += children[i].offsetWidth / 2
            }
        }
        else {
            let widthChildren = children.offsetWidth

            this._width += widthChildren / 4
        }

        return this._width;
    }

    getItem(id){
        return this._items[id];
    }

    getWrapper(){
        return this._wrapper;
    }

    getBody(){
        return this._body;
    }
}