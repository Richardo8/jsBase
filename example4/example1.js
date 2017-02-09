//集成的几种实现方式
//定义一个父类
function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function () {
        console.log(this.name + ' sleeping ');
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + ' like eat ' + food);
}

//1.原型链继承
function Cat() {
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//Test Code
var cat = new Cat();
console.log(cat.name);
cat.eat('fish');
console.log(cat.eat);
cat.sleep();
console.log(cat.sleep);
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);
//instanceof 判断是否是实例，与typeof不同，typeof返回值是一个字符串，该字符串说明运算数的类型，对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。

console.log("=======================")

//2.构造函数继承
function Dog(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}

//Test Code
var dog = new Dog();
console.log(dog.name);
console.log(dog.sleep());
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);