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