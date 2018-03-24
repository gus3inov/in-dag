export default class HScrollController{
    constructor(view, model){
        this._view  = view;
        this._model = model;

        this._body = this._model.getBody();
        this._btn = this._model.getBtn();

        this.handleBtn();
    }

    handleBtn(){
        this._btn.addEventListener('click', () => {
            this._view.toggleItems();
        });
    }

    scrollItems(){
        if(this._body.attachEvent){
            this._body.attachEvent('onmousewheel', this._view.handleScroll)
        }else{
            this._body.addEventListener('mousewheel', this._view.handleScroll.bind(this._view), false)
        }
    }
}