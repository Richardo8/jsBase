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