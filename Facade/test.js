// 外观模式
function addEvent(dom, type, fn) {
    if(dom.addEventListener){
        dom.addEventListener(type, fn, false);
    }else if(dom.attachEvent){
        dom.attanEvent('on' + type, fn)
    }else{
        dom['on' + type] = fn;
    }
}

var myInput = document.getElementById('myInput');
addEvent(myInput, 'click', function () {
    console.log('1');
})
addEvent(myInput, 'click', function () {
    console.log('2')
})
addEvent(myInput, 'click', function () {
    console.log('3');
})

// 外观模式可以处理兼容的问题

var getEvent = function (event) {
    return event || window.event;
}

var getTarget = function (event) {
    var event = getEvent(event);
    return event.target || event.srcElement;
}

var preventDefault = function (event) {
    var event = getEvent(event);
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
}

addEvent(document, 'click', function (e) {
    preventDefault(e);
    if(getTarget(e) !== myInput){
        document.getElementById('hide').style.display = 'none';
    }
})