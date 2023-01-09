// parasitic
//  创建一个函数，该函数的作用仅仅是封装对象的代码，再返回新创建的对象

function Person(name, age) {
    var o  = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
        console.log(this.name)
    };
    return o;
}

var friend = new Person("Coin",27)

friend.sayName()

// 返回的队形与构造函数外部创建的对象没什么不同
// 不可依赖于instance操作符来确定对象类型

// 稳妥构造函数
function Person1(name, age) {
    var o  = new Object();
    // 定义鞋私有变量和函数
    o.sayName = function(){
        console.log(name)
    };
    return o;
}

var friend = new Person1("Coin2",27)
console.log(friend.name)
// 只有sayName可以访问到内部的属性
friend.sayName()