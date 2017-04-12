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

Book.prototype.display = function () {
    console.log('this is Book.prototype.display')
}


var book = new Book('1', 'abc', '10');
console.log(book)
console.log(book.display());
// 同时使用以上两种方式会造成覆盖
