// 创建的每一个函数都有一个prototype(原型)属性
// 一个指针，指向一个对象  该对象包含 可以由特定类型的所有实例共享的属性和方法
function Person(){

}

Person.prototype.name = "COin"
Person.prototype.age =19
Person.prototype.sayName = function(){
    console.log(this.name)
}

var person1 = new Person()
var person2 = new Person()
person1.sayName()
console.log(person1.sayName == person2.sayName)

console.log('原型')
// 原型
console.log(Person.prototype.constructor)
// 这个值是否存在 Person.prototype属性
console.log(Person.prototype.isPrototypeOf(person1))
// 获取属性链
console.log(Object.getPrototypeOf(person1))


console.log('-----访问属性----')
// 访问属性 1.访问实例  2.访问原型prototype
// 如果设置了实例的属性，就会影响原型的访问，除非delete删除
person1.name = "HHHHH"
console.log(person1.name)
console.log(person1.hasOwnProperty("name"))
person1.name = null
console.log(person1.name)
console.log(person1.hasOwnProperty("name"))
delete person1.name
// 删除之后就开始访问原型
console.log(person1.name)
console.log(person1.hasOwnProperty("name"))

// hasOwnProperty() 检测某一个属性是存在于实例中？

console.log('-----in----')
// in 操作符 单独使用的时候 通过对象能访问到给定属性时返回true （实例 原型 都可）
console.log("name" in person1)

// 判断 访问属性是否在原型上
function hasPrototypeProperty(object,name){
    // 返回 true 表示在 原型上
    return !object.hasOwnProperty(name) && (name in object)
}

console.log("---for in ---")
// for-in 循环，返回的是所有能够通过对象访问的，可枚举(enumerated)的属性
// 屏蔽了不可枚举的原型的也可以返回
console.log(person1)
for (var i in person1){
    console.log(i)
}


// Object.keys() 取得对象上所有可枚举的实例属性
// Object.getOwnPropertyNames()  获取所有的包括不可枚举的实例属性

// 原型动态性
var friend = new Person();

Person.prototype.sayHi = function(){
    console.log('hi');
};

friend.sayHi()
// 可以正常运行，不存在任何问题
// 在friend实例中搜索sayHi属性，寻求未果，在原型上搜索，实例与原型之间的连接是一个指针，并非副本

// 如果重写整个原型对象，那么情况会发生变化
// 调用构造函数时会为实例添加一个指向最初原型的 [[ Prototype ]] 指针，而把原型修改为另一个对象就等于切断了构造函数与最初原型之间的联系。
// 实例中的指针只指向原型，并非构造函数。
// 重写原型对象切段了现有原型与任何之前已经存在的对象实例之间的联系，它们引用的仍然是最初的原型。



// 原生对象的原型
String.prototype.startWith =  function(text){
    return this.indexOf(text) == 0;
};

// msg是被String创造的，所以也可以使用该方法
var msg = "Hellow world!";
console.log(msg.startsWith("Hellow"))