//创建对象的9种方式
//1.使用Object构造函数
var person = new Object();
person.name = "Jack";
person.age = 20;
person.job = "Engineer";
person.sayName = function () {
    console.log(this.name);
}
/*[缺点]使用同一个接口创建很多对象，会产生大量重复代码*/

//2.适用对象字面量
var person1 = {
    name: 'Jack',
    age: 20,
    job: "Engineer",
    sayName: function () {
        console.log(this.name);
    }
}
/*[缺点]使用同一个接口创建很多对象，会产生大量重复代码*/

//3.工厂模式
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    }
    return o;
}

var p1 = createPerson('jack', 20, 'Engineer');
var p2 = createPerson('jack', 20, 'doctor');
/*[缺点]解决了创建多个相似对象的问题，但没有解决对象识别的问题*/

//4.构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var p3 = new Person('jack', 20, 'Engineer');
var p4 = new Person('mick', 20, 'Engineer');
/*[缺点]每个方法都要在每个实例上重新创建一遍*/

//5.原型模式
function Person1() {

}
Person1.prototype = {
    constructor: Person1,
    name: 'Jack',
    age: 20,
    job: 'Engineer',
    sayName: function () {
        console.log(this.name);
    }
}
/*[缺点]以这种方式重设constructor属性会导致它的[[Enumerable]]特性被设置为true,默认情况下原生的constructor属性是不可枚举的*/

//6.组合模式
function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.firend = ['jack', 'mack'];
}

Person2.prototype = {
    constructor: person2,
    sayName: function () {
        console.log(this.name);
    }
}

var p5 = new Person2()






















