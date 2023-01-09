function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property
}

function SubType(){
    this.subproperty = false
}

// 继承了 SuperType
// 实现的本质是重写原型对象，代之以一个新类型的实例
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function(){
    return this.subproperty;
}

var instance = new SubType()
console.log(instance.getSuperValue())


// 确定原型和实例的关系
console.log(instance instanceof Object)
console.log(instance instanceof SuperType)

console.log(SuperType.prototype.isPrototypeOf(instance))


// 原型链 SubType.prototype变成了一个SuperType的实例
// 所以包含引用类型值的原型属性会被所有实例共享
function Aa(){
    this.colors = ["red"];
}

function Bb(){

}

Bb.prototype = new Aa();

var instance1 = new Bb();
instance1.colors.push("black")

console.log(instance1.colors)

var instance2 = new Bb();
console.log(instance2.colors)