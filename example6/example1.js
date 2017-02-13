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
    this.friends = ['jack', 'mack'];
}

Person2.prototype = {
    constructor: Person2,
    sayName: function () {
        console.log(this.name);
    }
}

var p5 = new Person2('jack', 20, 'Engineer');
var p6 = new Person2('jack-C', 24, 'Engineer');
p5.friends.push('Van');
console.log(p5.friends);
console.log(p6.friends);
console.log(p5.sayName === p6.sayName);
console.log(p5.friends === p6.friends);
/*组合使用构造函数模式和原型模式是创建自定义类型的最常见方式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。这种混成模式还支持向构造函数传递参数，是用来定义引用类型的一种默认模式*/

//7.动态原型模式
function Person3(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if(typeof this.sayName != "function"){
        Person3.prototype.sayHisName = function () {
            console.log(this.name);
        }
    }
}

let friend = new Person3("jack", 29, 'Engineer')
friend.sayHisName();

//8.寄生构造函数模式
function Person4(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayThisName = function () {
        console.log(this.name);
    }
    return o;
}
var friend1 = new Person4("jack", 29, 'Engineer')
friend1.sayThisName();


//9.稳妥构造函数模式
function Person5(name, age, job) {
    var o = new Object();
    o.sayName = function () {
        console.log(name);
    }
    return o;
}

var friend2 = Person5('jack', 28, 'Engineer')
friend2.sayName();
/*所谓稳妥对象指没有公共属性，而且其方法也不引用this的对象。稳妥对象最适合在一些安全环境中(这些环境会禁止使用this和new)或者在防止数据被其他应用程序改动时使用。*/
















