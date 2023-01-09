// 主要区别就是，函数声明可以变量提升，但是函数表达式不会

// 只能使用函数表达式的场景
// 浏览器修复声明定义的方法是不一致的，所以声明的结果可能不一致
var sayHi
var condition

if(condition){
    function sayHi(){
        console.log('hi')
    }
    // sayHi = function(){
    //     console.log('hi')
    // }
}else{
    function sayHi(){
        console.log('no')
    }
    // sayHi = function(){
    //     console.log('no')
    // }
}
sayHi()