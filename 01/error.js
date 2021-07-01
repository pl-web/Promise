// error type
// Error

// RerferenceError 引用
const a = 123;
console.log(b);
// Uncaught ReferenceError: b is not defined


// TypeError 类型
const obj = { name: '' }
console.log(obj.name());
// Uncaught TypeError: obj.name is not a function


// RangeError
function foo() {
  foo();
};
foo();
// Uncaught RangeError: Maximum call stack size exceeded


// SynatxError
const name = 'pl';
const name = 'lp';
// Uncaught SyntaxError: Identifier 'name' has already been declared


// try ... catch
try {
  const obj = {};
  console.log(obj());
} catch(err) {
  // console.log(err);
  console.log(err.massage);
  console.log(err.stack);
};


// throw new Error
throw new Error('this is a error massage');
