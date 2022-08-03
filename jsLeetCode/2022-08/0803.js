// 899 有序队列
// 给定一个字符串s和一个整数k.你可以从s的前k个字母中选择一个，并把它加到字符串的末尾
// 返回，再应用上述步骤的任意数量的移动后，字典上最小的字符串
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// 56ms
// 42.8MB
// k = 1 穷举s次，找到最小的字典值
// k > 1 可以完美升序，直接排序
 var orderlyQueue = function(s, k) {
    let ans = s
    if( k == 1 ){
        const len  =s.length
        for(let i = 0; i < len ;i++){
            const cur = s
            const newChar  = s.slice(1)+cur[0]
            if(newChar < ans){
                ans = newChar
            }
            s = newChar
        }
    }else{
        let arr = s.split("")
        arr.sort(
            // (b,a)=>{
            //     // 返回负数  b在前
            //     // 返回正数  a在前
            //     if(b < a){
            //         return -1
            //     }else return 1
            // }
        )
        ans = arr.join("")
    }
    console.log(ans)
    return ans
};

s = "abcdeaaa"
k = 2
orderlyQueue(s,k)