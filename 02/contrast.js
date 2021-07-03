// callback functions need to be defined before execution

// 1. 执行回调函数的方式将更加灵活
// 纯回调函数方式只能在执行异步任务之前进行指定
// Promise方式可以在执行异步任务之后或之前的任意时间去进行指定

// 2. 支持链式调用, 解决回调嵌套问题
// 解决方案: Promise  async await

// fake code

// callback code
doFristThing((value) => {
  //...
  // get firstValue
  doSecondThing((firstValue) => {
    // ...
    // get secondValue
    doThirdThing((secondValue) => {
      // ...
    }, failureCallBack);
  }, failureCallBack);
}, failureCallBack);


// promise
const p = new Promise(function(resolve, reject) {
  const firstResult = firstStep();
  resolve(firstResult);
})
p
.then(function(firstResult) {
  secondStep(firstResult);
})
.then(function(secondResult) {
  thirdStep(secondResult);
})
.catch(function(err) {
  failureCallBack(err);
});


// async await
const asyncProcess = async function() {
  try {
    const firstResult = await firstStep();
    const secondResult = await secondStep(firstResult);
    const thirdResult = await thirdStep(secondResult);
  } catch(err) {
    failureCallBack(err);
  }
}