(function(){
    var root=this,
        isBrowserSide=false;
    if(typeof window !=="undefined" && root===window){
        isBrowserSide=true;
    }
    console.log(isBrowserSide)
    /*
     判断当前环境是浏览器还是node环境*/

    if(isBrowserSide == false){
        console.log(this === global);
        /*在node中global是全局变量*/

        foo = 'bar'

        function testThis() {
            this.foo = 'foo'
        }

        console.log(global.foo);
        new testThis();
        console.log(global.foo);
        console.log(new testThis().foo);
        testThis();
        console.log(global.foo)
    }else{
        console.log(this === window);
        /*this就是window*/

        foo = 'bar'

        function testThis() {
            this.foo = 'foo'
        }

        console.log(this.foo);
        new testThis();
        console.log(this.foo);
        console.log(new testThis().foo);
    }
    /*
    * 如果我们在一个函数里面使用this，需要注意的就是我们调用函数的方式，如果是正常的方式调用函数，this指代全局的this，如果我们加一个new，这个函数就变成了一个构造函数，我们就创建了一个实例，this指代这个实例.*/
}).call(this);








