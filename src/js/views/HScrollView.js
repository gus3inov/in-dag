import Animate from '../helpers/Animate';

export default class HScrollView extends Animate{
    constructor(model){
        super();
        this._model = model;
        this._offsetScroll = 0;
        this._wDelta = 40 >> 2;
        this._widthScroll = 0;

        this.items = model.getItems();
        this.wrapper = model.getWrapper();

        this.animate = super.animate;
        this.bounceEaseOut = super.bounce;

        this.handleScroll.bind(this);
    }

    handleScroll (e) {
        if (!e) e = event;

        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        let _delta = e.wheelDelta || -e.detail;
        _delta /= Math.abs(_delta);

        this._offsetScroll += (_delta * this._wDelta);

        console.log(this);

        this.animateScroll(this, this._offsetScroll, 20);
    }

    animateScroll(move, durationSlide){
        let axis        = Math.sign(move),
            moveX       = Math.abs(move),
            distance    = moveX;

        for(let i = 0; i < this.items.length; i++){
            let item = this.items;

            item.style.position = 'relative';

            if(axis === 1){

                this.animate((durationSlide * 1), this.bounceEaseOut, () => {
                    item.style.transform = `translateX(${distance + (progress * 500)}px)`;
                })

            }else{

                this.animate((durationSlide * 1), this.bounceEaseOut, () => {
                    item.style.transform = `-translateX(${distance + (progress * 500)}px)`;
                })

            }
        }
    }

}