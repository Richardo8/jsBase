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


let insert = (value) => ({into:(array) => ({after: (afterValue) => {
    array.splice(array.indexOf(afterValue) + 1, 0, value);
    return array;
}})})

console.log(insert(2).into([1, 3]).after(1));
//箭头函数多重嵌套

//斐波那契数列 证明尾递归
function Fibonacci(n) {
    if(n <= 1) { return 1 };

    return Fibonacci(n -1) + Fibonacci(n - 2);
}

console.log(Fibonacci(10));
// console.log(Fibonacci(100));
// console.log(Fibonacci(500));
//堆栈溢出 死机

function Fibonacci1(n ,ac1 = 1, ac2 = 1) {
    if(n <= 1) { return ac2 };

    return Fibonacci1(n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci1(100));
console.log(Fibonacci1(1000));
console.log(Fibonacci1(2000));

/*我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。*/

//函数柯里化 意思是将多参数的函数转换成单参数的形式。
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}

function tailFactorial(n, total) {
    if(n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

console.log(factorial(5));











