// 抽象工厂模式
// 抽象类
var Car = function () {
    if(!(this instanceof Car)){
        return new Car();
    }
};
Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能使用')
    },
    getSpeed: function () {
        return new Error('抽象方式不能使用')
    }
}

var car = Car();
console.log(car.getPrice());
// 此时调用会抛出错误，这样可以抽象出来一个类，类似于继承，可以依照这个类创建一些子类。

// 抽象工厂模式 用来当做父类。
var VehicleFactory = function (subType, superType) {
    if(typeof VehicleFactory[superType] === 'function'){
        function F() {

        }
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else{
        throw new Error('未创建该抽象类')
    }
}
// 轿车抽象类
VehicleFactory.Car = function () {
    this.type = 'car'
};
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能使用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能使用')
    }
};
// 公交车抽象类
VehicleFactory.Bus = function () {
    this.type = 'car'
};
VehicleFactory.Bus.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能使用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能使用')
    }
};
// 货车抽象类
VehicleFactory.Truck = function () {
    this.type = 'car'
};
VehicleFactory.Truck.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能使用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能使用')
    }
};

// 实现
var BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
}

VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function () {
    return this.price;
};
BMW.prototype.getSpeed = function () {
    return this.speed;
}

var Q7 = new BMW(1500000, 200);
console.log(Q7.type);
console.log(Q7.getPrice());
console.log(Q7.getSpeed());

// 综上，抽象模式实际是抽象出一个父类，然后通过继承子类，再由子类new实例，父类的方法可以抛出某些错误，预留空间，达到提醒的目的。





