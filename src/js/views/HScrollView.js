import Animate from '../helpers/Animate';

export default class HScrollView extends Animate{
    constructor(model){
        super();
        this._model = model;
        this._offsetScroll = 0;
        this._wDelta = 20 >> 2;
        this._widthScroll = model.getWidth();
        this._waiting = false;
        this._endScrollHandle = null;
        this._isOpen = false;

        this.items = model.getItems();
        this.wrapper = model.getWrapper();

        this.animate = super.animate;
        this.makeEaseOut = super.makeEaseOut;
        this.easeOut = super.easeOut;
    }

    toggleItems(){
        this._isOpen = !this._isOpen;
        for(let i = 0; i < this.items.length; i++){
            let item = this.items[i];

            item.style.transform = '';
        }
    }

    handleScroll(e){
        if(this._waiting || !this._isOpen) return;
        this._waiting = true;

        clearTimeout(this._endScrollHandle);

        if (!e) e = event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        let _delta = e.wheelDelta || -e.detail;
        _delta /= Math.abs(_delta);

        this._offsetScroll += (_delta * this._wDelta);

        setTimeout(() => {
            this._waiting = false;
        }, 100);

        this._endScrollHandle = setTimeout(() => {
            this.animateScroll(this._offsetScroll, 100);
        }, 50);
    }

    animateScroll(move, durationSlide){
        let axis        = Math.sign(move),
            moveX       = Math.abs(move),
            pos         = 0,
            distance    = moveX >= this._widthScroll ? this._widthScroll :  moveX;

        for(let i = 0; i < this.items.length; i++){
            let item = this.items[i];

            item.style.position = 'relative';

            if(axis === 1){
                this.animate(durationSlide * i, this.makeEaseOut(this.easeOut), (progress) => {
                    pos = ( distance + Math.round(progress) )  * 15;
                    item.style.transform = `translateX(${ pos  >= this._widthScroll ? 0  : pos }px)`;
                })

            }else if(axis === -1){
                this.animate(durationSlide * i, this.makeEaseOut(this.easeOut), (progress) => {
                    pos = ( distance + Math.round(progress) )  * 15;
                    item.style.transform = `translateX(-${ pos  >= this._widthScroll ? this._widthScroll : pos }px)`;
                })

            }
        }
    }

}