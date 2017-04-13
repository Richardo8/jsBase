var Book = function (id, bookname, price) {
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}

Book.prototype = {
    display: function () {
        console.log('this is Book.prototype')
    }
}

Book.prototype.display1 = function () {
    console.log('this is Book.prototype.display')
}

// Book.prototype = {
//
// }

var book = new Book('1', 'abc', '10');
console.log(book)
console.log(book.display());
console.log(book.display1());
// 同时使用以上两种方式会造成覆盖，如果先使用Book.prototype.display1 = function (){}这种方式，那么这种方式定义的方法将全部被覆盖，加入将Book.prototype = {}这个对象置为空，则所有方法都将消失

var BookObj = function (id, name, price) {
    //私有变量
    var num = 1;
    //私有方法
    function checkId() {
        console.log('this is private function')
    }
    //特权方法 特权方法是通过this创建的方法，不但可以访问对象的共有属性和共有方法，还能访问到类或对象自身的私有属性和私有方法，所以叫做特权方法。
    this.getName = function () {
        console.log(name);
        console.log(num);
        checkId();
    }
    this.getPrice = function () {

    }
    this.setName = function () {

    }
    this.setPrice = function () {

    }
    //对象共有属性
    this.id = id;
    //对象共有方法
    this.copy = function () {

    }
    //构造器
    this.setName(name);
    this.setPrice(price);
}

// 类静态共有属性（实例不能访问）
BookObj.isChinese = true;
// 类静态公有方法（实例不能访问）
BookObj.resetTime = function () {
    console.log('this is resetTime')
}
BookObj.prototype = {
    isJsBook: false,
    display: function () {
        console.log('public function');
    }
}

var newBook = new BookObj('1', 'abc', '10');
newBook.getName();
console.log(newBook.num);//实例不能直接获取到类的属性
//如此例中getName()方法可以获取到类的私有变量和私有方法

console.log(BookObj.isChinese);
BookObj.resetTime();

// console.log(newBook.isChinese);
// newBook.resetTime()
// 如上，实例不能访问类的静态共有属性和方法

console.log(newBook.isJsBook);
newBook.display();
// 如上例prototype中的方法和属性是共有的

/*使用闭包返回构造函数，实现静态私有变量和静态私有函数*/
var BookClosure = (function () {
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(bookNum) {
       if(bookNum > 2){
           throw new Error('only 2')
       }
    }
    function _book(newId, newName, newPrice) {
        var name, price;
        function checkId(id) {

        }
        this.getName = function () {

        }
        this.getPrice = function () {

        }
        this.setName = function () {

        }
        this.setPrice = function () {

        }
        this.id = newId;
        this.copy = function () {

        }
        bookNum++;
        checkBook(bookNum);
        this.setName(newName);
        this.setPrice(newPrice);
    }

    _book.prototype = {
        isJsBook: false,
        display: function () {

        }
    };

    return _book;
})()

var bookClo1 = new BookClosure('1', 'a', '10');
var bookClo2 = new BookClosure('1', 'a', '10');
// var bookClo3 = new BookClosure('1', 'a', '10');
// 上例中前两个可以正确创建，第三个会报错‘only 2’，也就是说使用闭包可以调用类的静态私有属性和静态私有方法。

/*继承中的类式继承*/
// 父类
function SuperClass() {
    this.superValue = ['1', '2','3'];
}
// 为父类添加公有方法
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}
// 声明子类
function SubClass() {
    this.subValue = ['4', '5', '6'];
}
// 继承父类
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function () {
    return this.subValue;
}
// 该种继承方式就是新的类的原型被赋予了父类的实例

var instance = new SubClass();
console.log(instance.getSubValue());
console.log(instance.getSuperValue());
// 子类的实例继承了父类的方法

console.log(SubClass instanceof SuperClass);
console.log(SubClass.prototype instanceof  SuperClass);
// 以上证明了SubClass并不是继承了SuperClass，而只是SubClass.prototype继承了SuperClass

var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.superValue);
instance1.superValue.push('7');
console.log(instance2.superValue);
// 上例说明了在修改第一个实例的subValue的时候第二个实例的值也会跟着改变，而且实例化父类的时候无法对属性进行初始化

/*继承中的构造函数继承*/
// 声明父类
function SuperClassStructure(id) {
    this.books = ['a', 'b', 'c']
    this.id = id;
}
// 父类声明原型方法
SuperClassStructure.prototype.showBooks = function () {
    console.log(this.books);
}
// 声明子类
function SubClassStructure(id) {
    SuperClassStructure.call(this, id);
    //call方法是关键，实质是将子类的变量放在父类中执行一遍
}
var instance3 = new SubClassStructure(1);
var instance4 = new SubClassStructure(2);
instance3.books.push('d');
console.log(instance3.books);
console.log(instance3.id);
console.log(instance4.books);
console.log(instance4.id);
// instance4.showBooks();
// 上例表明了修改其中一个实例不会改变父类的值，但是无法使用父类prototype的方法

/*继承中的组合继承*/
// 声明父类
function SuperClassGroup(name) {
    this.name = name;
    this.books = ['a', 'b', 'c']
}

SuperClassGroup.prototype.getName = function () {
    console.log(this.name);
}
// 声明子类
function SubClassGroup(name, time) {
    SuperClassGroup.call(this, name);
    this.time = time;
}

SubClassGroup.prototype = new SuperClassGroup();

var instance5 = new SubClassGroup('a', 1000);
var instance6 = new SubClassGroup('b', 2000);
console.log(instance5);
console.log(instance6);
instance5.getName();
instance6.getName();
instance5.books.push('d');
console.log(instance5.books);
console.log(instance6.books);
/*组合继承就是将之前的两种继承模式合为一体，属性通过构造函数继承，使用call方法，方法通过类式继承，解决了以上两种方式的缺点。但是这种方法会调用两边父类构造函数。*/

/*继承中的原型式继承*/
function inheritObject(o) {
    function F() {

    }
    F.prototype = o;
    return new F();
}

var bookExample = {
    name: 'js book',
    alikeBook: ['a', 'b'],
    getName: function () {
        console.log(this.name);
    }
}

var newBookEx1 = inheritObject(bookExample);
var newBookEx2 = inheritObject(bookExample);
newBookEx1.name = 'c';
newBookEx1.alikeBook.push('d');
newBookEx1.getName();
newBookEx2.name = 'c';
newBookEx2.alikeBook.push('d');
newBookEx2.getName();
console.log(newBookEx1.alikeBook);
console.log(newBookEx2.alikeBook);//问题依然出现，共用了父类的属性。

/*继承中的寄生式继承*/
//声明基对象
var book1 = {
    name: 'a',
    alikeBook: ['b', 'c']
}
function createBook(obj) {
    // 通过原型继承方式创建新对象
    var o = new inheritObject(obj);
    //拓展新对象
    o.getName = function () {
        console.log(name);
    }
    return o;
}

var createbook = createBook(book1);
console.log(createbook);
createbook.getName();
// 不能初始化属性

/*继承中的寄生组合式继承
* 就是寄生式和构造函数式的组合*/
function inheritPrototype(SuperClass, SubClass) {
    // 复制一份父类的原型副本保存在变量中
    var p = inheritObject(SuperClass.prototype)
    // 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = SubClass;
    // 设置子类的原型
    SubClass.prototype = p;
}

// 测试
// 定义父类
function Super(name) {
    this.name = name;
    this.books = ['a', 'b', 'c']
}
Super.prototype.getName = function () {
    console.log(this.name);
}
// 定义子类
function Sub(name, time) {
    Super.call(this, name);
    this.time = time;
}
inheritPrototype(Super, Sub);
Sub.prototype.getTime = function () {
    console.log(this.time);
}
var instance7 = new Sub('a', 1)
var instance8 = new Sub('b', 2)
instance7.books.push('d');
console.log(instance7.books);
console.log(instance8.books);
instance7.getName()
instance7.getTime()
/*本质就是先利用构造函数制造出子类，然后将储存着父类方法的原型存在一个变量中，但是此时变量中的constructor是父类的，所以需要修改成子类的，修改之后再将此值赋予子类，就能解决各种问题了。子类若想继续添加方法，只能用点语法添加，不能使用prototype对象，否则会造成覆盖*/


function Add() {
    console.log(arguments);
}

Add(1,2,3);//arguments是方法中的一个对象，包含了调用方法时传入的所有的数据

/*多继承*/
Object.prototype.mix = function () {
    var i = 1,
        len = arguments.length,
        target = arguments[0],
        arg;
    for(; i < len; i++){
        arg = arguments[i]
        for(var property in arg){
            target[property] = arg[property]
        }
    }
    return target;
}

var first = {
    name: 'a',
    alike: ['b', 'c', 'd']
}

var second = {
    color: 'red'
}

var otherBook = {};

otherBook = otherBook.mix(first, second);
console.log(otherBook)