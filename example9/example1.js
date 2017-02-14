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
