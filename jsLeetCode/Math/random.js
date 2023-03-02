// 随机roll两个数 合为500
// 两者误差不超过
let a = Math.floor(Math.random()*250)
let b = 500 -a

while(Math.abs(a - b )>100){
    a = Math.floor(Math.random()*250)
    b = 500-a
}
console.log(a)
console.log('-------')
console.log(b)