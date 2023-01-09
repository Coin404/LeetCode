// 使用原型链实现对原型属性和方法的继承
// 通过借用构造函数实现对实例属性的继承

function a(name){
    this.name = name
    this.colors  =['red']
}

a.prototype.sayName = function(){
    console.log(this.name)
}

function b(name,age){
    a.call(this,name)
    this.age = age
}

// 此处会挂载原型,会创建一次实例，但是本身只需要记录属性和构造者
b.prototype = new a()
b.prototype.constructor = a

inheritPrptotype(a,b)
// 替代
function inheritPrptotype(a,b){
    var prototype = Object(b,prototype) //创建对象
    prototype.constructor = a //增强对象
    a.prototype = prototype  //制定对象
}


b.prototype.sayAge = function(){
    console.log(this.age)
}

var instance1 = new b("Coin",19)
instance1.colors.push("black")

console.log(instance1.colors)
instance1.sayAge()
instance1.sayName()

var instance2 = new b("haoba ",20)
console.log(instance2.colors)
instance2.sayAge()
instance2.sayName()