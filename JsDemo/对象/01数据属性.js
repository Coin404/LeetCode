// 配置数据属性
// 如果声明的时候指定了值，那么三个属性默认为true
var person = {}
// 如果不指定，默认值都为false
Object.defineProperty(
    person,"name",
    {
        writable:false,  // 可读写
        configurable:false,  //可否删除
        enumerable:true,  //可遍历
        value:"COIN",
    }
);

console.log(person.name)
person.name = "Look"
// 非严格模式下，赋值操作将被忽略，严格模式下会导致抛出错误
console.log(person.name)
delete person.name
console.log(person.name)

// 设置完configurable为false之后就会有限制，无法复原
// 抛出异常
// Object.defineProperty(
//     person,"name",
//     {
//         configurable:true,
//     }
// );

var descriptor = Object.getOwnPropertyDescriptor(person,"name")
console.log(descriptor)
