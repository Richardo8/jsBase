//例1
function Obj() {
    this.value = "duixiang!";
}

var value = "global duixiang";
function Fun1() {
    console.log(this.value);
}

window.Fun1();
Fun1.call(window);
Fun1.call(document.getElementById('myText'));
Fun1.call(new Obj());
// Fun1.call(Obj());
window.Fun1();

var func = new function () {
    this.a = "func"
};
var myfunc = function (x) {
    var a = "myfunc";
    console.log(this.a);
    console.log(x);
};
myfunc.call(func, "var")
/*它的第一个参数用作 this 的对象。其他参数都直接传递给函数自身。*/
myfunc.apply(func, ["var"]);
/*
    对于apply和call两者在作用上是相同的，但两者在参数上有区别的。
    第一个参数意义都一样。第二个参数：apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
*/

//例2
//继承(使用call()方法实现继承)
function base() {
    this.member = " dnnsun_Member";
    this.method = function () {
        console.log(this.member);
    }
}

function extend(){
    base.call(this);
    console.log(member);
    console.log(this.method);
}
extend();

//使用apply() 方法实现继承
var Class = {
    create: function () {
        return function () {
            // this.initialize.apply(this, arguments);
            this.initialize.apply(this, arguments);
        }
    }
}

var vehicle = Class.create();
vehicle.prototype = {
    initialize: function (type, other) {
        this.type = type;
        this.other = other;
    },
    showSelf: function () {
        console.log("this vehicle is " + this.type + "," + this.other)
    }
}

var moto = new vehicle("Moto", "other");
moto.showSelf();
/*  func.call(func1,var1,var2,var3)  对应的apply写法为：func.apply(func1,[var1,var2,var3])，同时使用apply的好处是可以直接将当前函数的arguments对象作为apply的第二个参数传入。 */

//例3
function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

add.call(sub, 3,1);
/* 这个例子中的意思就是用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4);  注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。 */

//call 前边替换后边
function Obj1() {
    this.value = "x";
}

function Obj2() {
    this.value = "y";
    console.log(this.value);
}

Obj2.call(Obj1);

//例4
function Animal() {
    this.name = "Animal";
    this.showName = function () {
        console.log(this.name);
    }
}

function Cat() {
    this.name = "Cat";
}
var animal = new Animal();
var cat = new Cat();
animal.showName();
animal.showName.call(cat);
animal.showName.call(cat, ',');
animal.showName.apply(cat, []);

//例5 实现继承
function AnimalBase(name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name);
    }
}

function Dog(name) {
    AnimalBase.call(this, name)
}

var dog = new Dog('Hey');
dog.showName();
/*
 Animal.call(this) 的意思就是使用 Animal对象代替this对象，那么 Cat中不就有Animal的所有属性和方法了吗，Cat对象就能够直接调用Animal的方法以及属性了。
 */

//例6 实现多层继承
var s1 = function (name) {
    this.name = name;
}

var s2 = function (sex) {
    this.sex = sex;
}

var s3 = function (age) {
    this.age = age;
}

var Student = function (name, sex, age, score) {
    s1.call(this, name);
    s2.call(this, sex);
    s3.call(this, age);
    this.score = score;
}

Student.prototype.constructor = Student;
var s = new Student('jack', 'male', '12', '100')
console.log(s.name);
console.log(s.sex);
console.log(s.age);
console.log(s.score);