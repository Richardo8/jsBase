function createFunction() {
    let result = new Array();

    for (let i = 0; i < 10; i++){
        result[i] = function () {
            console.log(i);
            return i;
        }
    }

    return result;
}

console.log(createFunction())
createFunction()
//闭包

function createFunction1() {
    let result = new Array();

    for (let i = 0; i < 10; i++){
        result[i] = function (num) {
            return function () {
                console.log(num);
                return num;
            }
        }(i);
    }

    return result;
}

console.log(createFunction1())





function foo(x) {
    var tmp = 3;
    function bar(y) {
        console.log((x + y + (++tmp)));
    }
    bar(10);
}
foo(2)
/*这不是闭包。当你return的是内部function时，就是一个闭包。内部function会close-over外部function的变量直到内部function结束。*/












