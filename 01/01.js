const Fn = function() {
  this.name = 'Fn';
};

const fn = new Fn(); // fn 为实例对象, 可以简称为对象

Fn(); 
Fn.call({}); // Fn 为函数对象, 既可以执行, 也可以调用方法
