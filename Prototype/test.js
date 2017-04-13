var LoopImages = function (imgArr, container) {
    this.imageArray = imgArr;
    this.container = container;
}
LoopImages.prototype = {
    createImage: function () {
        console.log('create image');
    },
    changeImage: function () {
        cosnole.log('change image')
    }
}

var SlideLoopImg = function (imgArr, container) {
    LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function () {
    console.log('rewrite function')
}

var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function () {
    console.log('rewrite second function')
}

var fadeImg = new FadeLoopImg([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
], 'slide', [
    'left.jpg',
    'right.jpg'
])
console.log(fadeImg.container);
fadeImg.changeImage();

// 原型模式就是将可复用的，可共享的，耗时大的从基类中提出来然后放在原型prototype中，然后子类通过组合继承或寄生组合将方法和属性继承下来， 对于子类中的需要重写的方法重写。