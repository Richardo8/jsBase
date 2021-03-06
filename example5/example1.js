//ES6 class

//ES6 继承实现
class Animal{
    constructor(props){
        this.name = props.name || 'none';
    }

    eat(){
        console.log(this.name + " are eating")
    }
}

class Bird extends Animal{
    constructor(props){
        super(props);
        this.type = props.type || 'none';
    }

    fly(){
        console.log(this.name + ' can fly');
    }
}

console.log(typeof Animal);
console.log(Animal === Animal.prototype.constructor);

//TEST CODE
let t1 = {
    'name': 'jack',
    'type': 'eagle'
}
let xx = new Bird(t1);
xx.eat();
xx.fly();

console.log("=====================")


//Class
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}
/*上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法。

 Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。*/

let p = new Point(1,2);
console.log(p.toString());

console.log(p.constructor === Point.prototype.constructor);
/*在类的实例上调用方法，其实就是调用原型上的方法*/

console.log(p.hasOwnProperty('x'));
console.log(p.hasOwnProperty('y'));
console.log(p.hasOwnProperty('toString'));
console.log(p.__proto__.hasOwnProperty('toString'));
/*实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。*/

Object.assign(Point.prototype, {
    toValue(){},
    add(){}
})
/*由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。*/

console.log('==============')
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));
/*类的内部所有定义的方法，都是不可枚举的（non-enumerable）。但是以上使用Object.assign定义的方法是可以枚举的*/

/*
*constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。 */
class Foo{
    constructor(){
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);
/*constructor方法默认返回实例对象（this），完全可以指定返回另外一个对象，上例返回一个空的对象，导致实例对象不是Foo类的实例*/
// Foo();
/*Class不使用new无法调用，会报错：TypeError: Class constructor Foo cannot be invoked without 'new'*/

console.log("============");

let p1 = new Point(2,3);
let p2 = new Point(3,4);

console.log(p1.__proto__ === p2.__proto__);
p1.__proto__.printName = function () {
    return  'Oops'
};

console.log(p1.printName());
console.log(p2.printName());

let p3 = new Point(4,2);
console.log(p3.printName());
/*类的所有实例共享一个原型对象。可以通过实例的__proto__属性为Class添加方法。上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变Class的原始定义，影响到所有实例。*/

/*class不存在变量提升*/

console.log("================")

const MyClass = class Me {
    constructor(){

    }

    getClassName(){
        return Me.name;
    }
};

let inst = new MyClass();
console.log(inst.getClassName());
// Me.name;
/*该类的名字是MyClass而不是Me，Me只在Class内部代码可用，指代当前类。如果类的内部没用到，可以省略Me，如下const MyClass = class {  } */

//采用Class表达式，可以写出立即执行的Class
let person = new class {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}('jack');

person.sayName();

const bar = Symbol('bar');
const snaf = Symbol('snaf');

class MyselfClass{
    foo(baz){
        this[bar](baz);
    }

    [bar](baz){
        return this[snaf] = baz;
    }
};

let mC = new MyselfClass();

console.log(mC.foo('a'));
/*上面代码中，bar和snaf都是Symbol值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。*/

class Logger {
    printName(name = 'there'){
        this.print(`Hello ${name}`);
    }

    print(text){
        console.log(text);
    }
}

const logger = new Logger();
logger.printName();
// const { printName } = logger;
// printName();
/*上述写法会报错 TypeError: Cannot read property 'print' of undefined*/
/*上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。*/

console.log("===================")

//解决方法：
class Logger1 {
    constructor(){
        this.printName = this.printName.bind(this);
    }

    printName(name = 'there'){
        this.print(`Hello ${name}`);
    }

    print(text){
        console.log(text);
    }
}

const logger1 = new Logger1();
const {printName} = logger1;
printName();

console.log("=================");

class ColorPoint extends Point {
    constructor(x, y, color){
        // this.color = color; 此处需要先super从父类定义this，否则会报错：this is not defined
        super(x, y);
        this.color = color;
    }

    toString(){
        return this.color + ' ' + super.toString();
    }
}

let colorP = new ColorPoint(1,2,'black');
console.log(colorP.toString());

//多层继承
class BigColorPoint extends ColorPoint {
    constructor(x, y, color, big = "big"){
        super(x, y, color);
        console.log("super作为对象时，指向父类的原型对象。");
        console.log(super.toString());
        this.big = big;
    }

    toString(){
        return this.big + ', ' + super.toString();
    }
}

let bcP = new BigColorPoint(1,2,'black');
console.log(bcP.toString());

console.log(BigColorPoint.__proto__ === ColorPoint);
console.log(BigColorPoint.prototype.__proto__ === ColorPoint.prototype);


console.log(Object.getPrototypeOf(BigColorPoint) === ColorPoint);
console.log(Object.getPrototypeOf(BigColorPoint) === Point);
/*Object.getPrototypeOf方法可以用来从子类上获取父类。可以使用这个方法判断，一个类是否继承了另一个类。*/

console.log("====================")

//原生构造函数的继承
class MyArray extends Array {
    constructor(...args){
        super(...args);
    }
}

let arr = new MyArray();
arr[0] = 12;
console.log(arr.length);

arr.length = 0;
console.log(arr[0]);
/*ES6可以自定义原生数据结构（比如Array、String等）的子类，这是ES5无法做到的。*/

console.log('============')

//定义一个带版本功能的数组
class VersionArray extends Array {
    constructor(){
        super();
        this.history = [[]];
    }
    commit(){
        this.history.push(this.slice());
    }
    revert(){
        this.slice(0, this.length, ...this.history[this.history.length - 1])
    }
}

let x = new VersionArray();

x.push(1);
x.push(2);
console.log(x);
console.log(x.history);

x.commit();
console.log(x.history);
x.push(3);
console.log(x);

x.revert();
console.log(x);

console.log('======================')

//类的静态方法
class FooStatic {
    static classMethod(){
        return 'hello';
    }
}

console.log(FooStatic.classMethod());

let fooS = new FooStatic();
// fooS.classMethod(); 报错：Uncaught TypeError: fooS.classMethod is not a function
/*类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。*/
/*父类的静态方法，可以被子类继承。*/

class sonFooStatic extends FooStatic {
    static classMethod(){
        return super.classMethod() + ', too';
    }
}

console.log(sonFooStatic.classMethod());

//Minxin模式的实现
/*Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类。它在ES6的实现如下。*/
function minx(...minxins) {
    class Mix{}

    for(let minxin of minxins){
       copyProperties(Mix, minxin);
       copyProperties(Mix.prototype, minxin.prototype);
    }

    return Mix;
}

function copyProperties(target, source) {
    for(let key of Reflect.ownKeys(source)){
        if(key !== "constructor" && key !== "prototype" && key !== "name"){
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

class DistributedEdit extends Mix(Loggable, Serializable){

}






