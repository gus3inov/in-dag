export const requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

export default class Animate{
   animate(duration, timing, cb){
       let start = performance.now();

       requestAnimFrame( function animate(time){
           let timeFraction = (time - start) / duration;

           if(timeFraction > 1) timeFraction = 1;

           let progress = timing(timeFraction);

            cb(progress);

           if(timeFraction < 1){
               requestAnimFrame(animate);
           }
       });
   }

    easeOut(progress) {
        return Math.pow(( progress * 2 ), 2)
    }

   makeEaseOut(timing){
       return function(timeFraction){
           return 1 - timing(1 - timeFraction);
       }
   }

   bounce(timeFraction){
       for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
           if (timeFraction >= (7 - 4 * a) / 11) {
               return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
           }
       }
   }
}