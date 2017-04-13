// 安全模式
var F = function () {
    if(!(this instanceof F)){
        return new F()
    }
}
F.prototype.show = function () {
    console.log('123')
}

var f = F();
f.show();
var f1 = new F();
f1.show();
// 新建实例的时候需要new关键字，但是有时会遗忘，所以就需要添加安全模式，安全模式会先确认当前实例是否为类的实例，如果是则继续，如果不是则返回带有new关键词的类，也就是新建实例。

