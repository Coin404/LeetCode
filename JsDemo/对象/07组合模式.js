// 构造函数模式用来定义实例属性，而原型模式用来定义方法和共享的属性
// 每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存

function Person(name, age , job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['COin','Nanfeng'];
    this.sayJob = function(){
        console.log(this.job)
    }
}

Person.prototype = {
    consttructor: Person,
    sayName:function(){
        console.log(this.name)
    },
    same:'person',
}

var person1 = new Person('aaa',20,"sasda")
var person2 = new Person('bbb',30,"dsdsa")

person1.friends.push("hello")

console.log(person1.friends === person2.friends)
console.log(person1.sayName === person2.sayName)
console.log(person1.sayJob === person2.sayJob)
console.log(person1.same === person2.same)

// 构造函数 定义的属性是无法共享的
// 原型模式 指向的都是同一个属性