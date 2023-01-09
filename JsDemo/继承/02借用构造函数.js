function Aa(){
    this.colors = ["red"]
}

function Bb(){
    // 新创建的Bb实例的环境下，调用了Aa的构造函数
    // Bb的每个实例就会具有自己的colors属性副本
    // 方法无法复用
    Aa.call(this);
}

var instance1 = new Bb()
instance1.colors.push("black")
console.log(instance1.colors)

var instance2 = new Bb()
console.log(instance2.colors)