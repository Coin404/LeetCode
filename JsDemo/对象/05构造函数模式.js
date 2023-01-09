// 构造函数始终应该以大写字母开头
function Person(name, age, obj) {
  this.name = name;
  this.age = age;
  this.obj = obj;
  this.sayHello = function () {
    console.log("nononono");
  };
}

var person1 = new Person("COIN", 19, "objjj!");
var person2 = new Person("CO", 112, "ojj!");
person1.sayHello();

// new 操作符，调用构造函数步骤
// 1.创建一个新的对象
// 2.将构造函数的作用域赋给新对象  this指向了该对象
// 3.执行构造函数中的代码  -添加属性
// 4.返回新对象

// 两者获取了一个 constructor 属性
console.log(person1.constructor);
console.log(person2.constructor);

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);

// 构造函数与其他函数的唯一区别 ： 调用的方式不同
// 任何函数只要通过new操作符调用，就可以作为构造函数

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "JACK", 12, "coin");
console.log(o);

// 每次构造函数创建的实例都包含一个不同的Function实例
console.log(person1.sayHello == person2.sayHello)

// 如果放在外侧，那么就设置了全局的函数，内部设置一个指向函数的指针
// 新的问题： 多个全局函数  名不副实的特殊调用