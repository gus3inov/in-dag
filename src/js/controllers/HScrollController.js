export default class HScrollController{
    constructor(view, model){
        this._view  = view;
        this._model = model;

        this._body = this._model.getBody();
    }

    scrollItems(){
        if(this._body.attachEvent){
            this._body.attachEvent('onmousewheel', this._view.handleScroll.bind(this))
        }else{
            this._body.addEventListener('DOMMouseWheel', this._view.handleScroll.bind(this), false)
            this._body.addEventListener('mousewheel', this._view.handleScroll.bind(this), false)
        }
    }
}