nums = [2,1]

nums.sort((a,b)=>{
    // a为后面的元素，b为前面的元素
    console.log(a,b)
    // 升序，只有当后面的元素< 前面的元素才交换
    // 也就是 a - b < 0 交换 
    // 1 - 2 < 0 交换
    return a-b
})

console.log(nums)