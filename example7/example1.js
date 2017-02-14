//ES6 Proxy
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}`);
        return Reflect.set(target, key, value, receiver);
    }
})

obj.count = 1;

++obj.count;

var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
})

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);

let obj1 = Object.create(proxy);
console.log(obj1.time);















