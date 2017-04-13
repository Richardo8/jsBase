var L = {
    add: function () {
        console.log('add')
    },
    get: function () {
        console.log('get')
    },
    ajax: {
        get: function () {
            console.log('ajax.get')
        },
        post: function () {
            console.log('ajax.post')
        }
    },
    getThis: function () {
        this.get()
    }
}

L.add();
L.ajax.get();
L.getThis();

// 单例模式实际上就是提供了一个命名空间，使用这种方式可以加强对代码的管理，不会造成方法的混乱。