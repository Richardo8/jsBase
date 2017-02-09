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
dog.sleep();
console.log(dog.sleep);
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log("=======================")

//3.实例(原型式)继承
function Fish(name) {
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}

//Test Code
var fish = new Fish('fish');
console.log(fish.name);
fish.sleep()
console.log(fish.sleep);
console.log(fish instanceof Animal);
console.log(fish instanceof Cat);

console.log("=======================");

//4.拷贝继承(此种方法效率最低，因为内存占用高，要拷贝父类的属性，而且无法获取父类不可枚举的方法)
function Pig(name) {
    var animal = new Animal();
    for(var p in animal){
        Pig.prototype[p] = animal[p];
    }
    Pig.prototype.name = name || "Pig";
}

//Test Code
var pig = new Pig();
console.log(pig.name);
pig.sleep()
console.log(pig.sleep);
console.log(pig instanceof Animal);
console.log(pig instanceof Pig);

console.log("=======================");

//5.组合继承
function Mouse(name) {
    Animal.call(this);
    this.name = name || 'mouse';
}
Mouse.prototype = new Animal();

//Test Code
var mouse = new Mouse();
console.log(mouse.name);
mouse.sleep();
mouse.eat('rice');
console.log(mouse.eat);
console.log(mouse instanceof Animal);
console.log(mouse instanceof Mouse);

console.log("=======================");
//弥补了构造函数方式不可以继承原型的属性或方法的缺点，缺点是生成了两份实例（子类实例将子类原型上的屏蔽了）

//6.寄生组合继承
function Bird(name) {
    Animal.call(this);
    this.name = name || 'bird';
}
(function () {
    //创建一个没有实例方法的类
    var Super = function () {

    };
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Bird.prototype = new Super();
})();

//Test Code
var bird = new Bird();
console.log(bird.name);
bird.sleep()
console.log(bird.sleep);
bird.eat('rice');
console.log(bird.eat);
console.log(bird instanceof Animal);
console.log(bird instanceof Bird);
//解决了组合继承的缺点，但是实现较复杂
