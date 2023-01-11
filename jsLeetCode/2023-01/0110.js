// 753 欧拉回路
// 密码n位  范围k位
// 全排列

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
    highest = Math.pow(10,n-1);
    let ans = ''
    const seen = new Set()
    const dfs = (node) => {
        for(let x = 0; x< k ; ++x){
            let nei =node*10+x
            if(!seen.has(nei)){
                seen.add(nei)
                dfs(nei%highest)
                console.log(ans)
                ans+=x
            }
        }
    }
    dfs(0)
    for(let i =1;i<n;i++){
        ans += '0'
        console.log(ans)
    }
    return ans
};

console.log(crackSafe(3,2))