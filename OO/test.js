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


