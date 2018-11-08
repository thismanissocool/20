/**
 * Created by Administrator on 2018/11/8.
 */
let m1 = require('./module1');
let m2 = require('./module2');


console.log(m1());//先执行函数m1---》打印，后再执行console.log(m1())   因为函数没有return值所以输出undifend
m1();
console.log(m2.eat());
m2.eat();