// 回调函数
// 1. 自我定义的
// 2. 未主动调用的
// 3. 最后将被调用的

// 同步回调函数
const arr = [1, 2, 3];
arr.forEach((value, index) => { // forEach的遍历回调函数
  console.log(value, index);
});
console.log('after forEach');

// 输出结果
/**
 *  1 0
    2 1
    3 2
    after forEach
 */


// 异步回调函数
setTimeout(() => {
  console.log('setTimeout callback function');
}, 0);
console.log('after setTimeout');

// 输出结果
/**
 *  after setTimeout
    setTimeout callback function
 */