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

var Factory = function (type, content) {
    if(this instanceof Factory){
        return new this[type](content)
    }else{
        return new Factory(type, content)
    }
}

Factory.prototype = {
    Java: function (content) {
        this.content = content;
        (function () {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.background = 'red';
            div.style.width = '100px';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    JS: function (content) {
        this.content = content;
        (function () {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.background = 'white';
            div.style.width = '100px';
            document.getElementById('container').appendChild(div);
        })(content)
    },
    PHP: function (content) {
        this.content = content;
        (function () {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.background = 'green';
            div.style.width = '100px';
            document.getElementById('container').appendChild(div);
        })(content)
    }
}

var data = [
    {type: 'Java', content: 'java'},
    {type: 'JS', content: 'js'},
    {type: 'PHP', content: 'php'}
],
    len = data.length;

for(var i = 0; i < len; i++){
    Factory(data[i].type, data[i].content);
}