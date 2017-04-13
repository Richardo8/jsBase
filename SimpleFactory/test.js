var LoginAlert = function (text) {
    this.content = text;
}
LoginAlert.prototype.show = function () {
    console.log(this.content);
}
var userNameAlert = new LoginAlert('hello');
userNameAlert.show()

var LoginConfirm = function (text) {
    this.content = text;
    (function (content) {
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.background = 'red';
        document.getElementById('container').appendChild(div);
    })(text)
}
LoginConfirm.prototype.show = function () {
    console.log(this.content)
}
var loginConfirm = new LoginConfirm('world');
loginConfirm.show();

var LoginPrompt = function (text) {
    this.content = text;
}

LoginPrompt.prototype.show = function () {
    console.log(this.content);
}
var loginPrompt = new LoginPrompt('!!!')
loginPrompt.show()

