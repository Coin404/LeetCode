function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    // return num*factorial(num-1)
    // 解决方案
    return num * arguments.callee(num - 1);
  }
}

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));
// 报错，因为 factorial 函数已经被重置
//  arguments.callee 指向正在执行的函数的指针  严格模式下不允许访问

// 严格模式下写法
var factorial1 = function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};
