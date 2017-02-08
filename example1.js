myName = "global";

function foo() {
    alert(myName);
    var myName = "local";
    alert(myName);
}

foo();
/*
 变量在同一作用域（同一函数）中，声明都是被提至作用域顶部先进行解析的。
*/