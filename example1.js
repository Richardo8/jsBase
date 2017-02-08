myName = "global";

function foo() {
    console.log(myName);
    var myName = "local";//如果注释掉该行，函数内部没有var myName这个变量，此时就会用到全局定义的变量，但是函数作用域中定义了变量之后，会前置定义，所以此时可见第一个console中的myName是灰色的，也就是未定义
    console.log(myName);
}

foo();
console.log(myName);

/*
 变量在同一作用域（同一函数）中，声明都是被提至作用域顶部先进行解析的。
*/

if(!("a" in window)){
    var a = 1;
}

console.log(a);
/*
a 变量的声明被提前到了代码顶端，此时还未赋值。接下来进入 if 语句，判断条件中 "a" in window 已成立（a 已被声明为全局变量），所以判断语句计算结果为 false，直接就跳出 if 语句了，所以 a 的值为 undefined。

 var a; // "undefined"
 console.log("a" in window); // true

 if (!("a" in window)) {
 var a = 1; // 不执行
 }

 alert(a); // "undefined"
*/

function test() {
    console.log('1');
}

test();

function test() {
    console.log('2')
}

test();

/*
*
 运行以上代码片段，看到的两次弹窗显示的都是 “2”，为什么不是分别为 “1” 和 “2” 呢？很简单，test 的声明先于 test() 被解析，由于后者覆盖前者，所以两次执行的结果都是 “2”。
* */