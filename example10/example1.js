/*数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

 Set 本身是一个构造函数，用来生成 Set 数据结构。*/
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for(let i of s){
    console.log(i);
}

let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set);
/*向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
*
* 上面代码向Set实例添加了两个NaN，但是只能加入一个。这表明，在Set内部，两个NaN是相等。*/

