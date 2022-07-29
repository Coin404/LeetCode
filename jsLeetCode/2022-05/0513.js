//  一次编辑
// 字符串有三种编辑操作：插入一个字符，删除一个字符，或者替换一个字符
// 给定两个字符串，编写一个函数判定他们是否只需要一次（零次）编辑

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

// 双指针前后缀  68ms
 var oneEditAway = function(first, second) {
    let p1 = 0
    let p2 = first.length - 1
    let q1 = 0
    let q2 = second.length - 1
    if( Math.abs(q2-p2) >= 2){
        return false
    }
    while(p1 <= p2 && q1 <= q2){
        if(first[p1] == second[q1]){
            ++p1
            ++q1
            continue;
        }
        // 找到左侧首次不同的位置之后找到右侧首次不同的位置
        if(first[p2] == second[q2]){
            --p2
            --q2
        } else {
            break
        }
    }
    // 根据停止的位置判断需要几次变换
    console.log(p1)
    console.log(p2)
    console.log(q1)
    console.log(q2)
    return p2-p1+q2-q1 <= 0 && Math.abs(p1-p2) <= 1 && Math.abs(q1-q2) <=1
};

let a = "teacher"
let b = "bleacher"
console.log(oneEditAway(a,b))