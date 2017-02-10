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








