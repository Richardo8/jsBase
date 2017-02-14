//ES6 函数
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}

foo();
foo();

x = 101;
foo();
/*参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。*/

//rest参数
function add(...values) {
    let sum = 0;
    for(var val of values){
        sum += val;
    }

    return sum;
}

console.log(add(2, 5, 3));

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    })
}

var a = [];
push(a, 1, 2, 3)
console.log(a);



//箭头函数
/*
 （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

 （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

 （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

 （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。*/

function foo1() {
    setTimeout(() => {
        console.log('id：', this.id)
    }, 1000)
}

var id = 21;
foo1.call({
    id: 42
})


function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    setInterval(() => this.s1++, 1000);

    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
/*Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。所以，3100毫秒之后，timer.s1被更新了3次，而timer.s2一次都没更新。*/





















