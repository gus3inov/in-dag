// class Scroll {
//     constructor(slideWrapper) {
//         this._wrapper = typeof slideWrapper !== 'string' ? slideWrapper : document.querySelector(slideWrapper)
//         this._items = this._wrapper.children
//         this._offsetScroll = 0
//         this._body = document.documentElement;
//         this._wDelta = 20
//
//         this.listenEvents()
//     }
//
//     scrollDoc(e) {
//         if (!e) e = event
//         console.log('scroll')
//         e.preventDefault ? e.preventDefault() : e.returnValue = false
//         this._offsetScroll++;
//
//         let _delta = e.wheelDelta || -e.detail
//         _delta /= Math.abs(_delta)
//
//         this._offsetScroll += (_delta * this._wDelta)
//
//         for(let i = 0; i < $('.categories-list').length; i++){
//             console.log($('.categories-list')[i].offsetWidth)
//         }
//
//         $('.categories-list__item').css({
//                 position: 'relative',
//                 left: this._offsetScroll + 'px'
//             })
//     }
//
//     listenEvents(){
//         if(this._body.attachEvent){
//             this._body.attachEvent('onmousewheel', this.scrollDoc.bind(this))
//         }else{
//             this._body.addEventListener('DOMMouseWheel', this.scrollDoc.bind(this), false)
//             this._body.addEventListener('mousewheel', this.scrollDoc.bind(this), false)
//         }
//     }
// }
//
// const scroll = new Scroll('.categories-list')
// window.scroll = scroll
//
// var wDelta = 120;
// function scrollDoc(e) {
//     if (!e) e = event;
//     if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
//     var __delta = e.wheelDelta || -e.detail;
//     __delta /= Math.abs(__delta);
//     document.documentElement.scrollLeft -= __delta * wDelta; // FF, Opera, IE
//     if (this.attachEvent) return false;
//     document.body.scrollLeft -= __delta * wDelta; // Chrome
// }
// window.onload = function() {
//     var html = document.documentElement;
//     if (html.attachEvent) {
//         html.attachEvent("onmousewheel", scrollDoc); // IE and Opera
//     } else {
//         html.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
//         html.addEventListener("mousewheel", scrollDoc, false); // Chrome
//     }
// }