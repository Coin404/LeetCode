function Person(name, age) {
  // 属性
  this.name = name;
  this.age = age;
  // 方法
  console.log(typeof this.sayName);
  if (typeof this.sayName != "function") {
    // 此段代码只会在第一次运行的时候执行
    // 这里对原型做出的修改会立即在所有实例中得到反映
    Person.prototype.sayName = function () {
      console.log(this.name);
    };
  }
}

var friend = new Person("Coin", 24);
var friend2 = new Person("Coi11", 241);
friend.sayName();

// 重写原型对象
Person.prototype = {
    name:'xixi',
    age:12,
    sayName:function(){
        console.log(this.age)
    }
}

// 引用的仍然是之前的原型，并没有更新原型
friend.sayName();
friend2.sayName();