//多米诺  838
//多米诺同时向周围倒下，如果两个夹着一个竖着的，保持原状，
//倒下时不会对其他倒下的或者已经倒下的施加额外的力

//模拟，枚举所有连续的没有被推动的骨牌，如果两边骨牌的方向相同
//连续的骨牌导向同一次，相反保持中立，相对，向中间倒下
/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
    const s = [...dominoes]; // 深拷贝一个数组
    let n = s.length,i = 0;
    let left = 'L';
    while(i < n){
        let j = i;
        while(j<n && s[j] == '.'){
            j++;
            //找到连续的没有被推动的骨牌
        }
        const right = j < n ? s[j] :'R';
        //如果没有出界，就是用正常的，如果再边界，假设有一个向右侧倒下的骨牌，不会破坏结构
        if(left == right){
            //方向相同，倒向同一侧
            while(i<j)
            {
                s[i++] =right;
            }
        }
        else if (left=='R' && right == 'L'){
            //方向相对，两侧往中间
            let k = j-1;
            while(i<k){
                s[i++] = 'R';
                s[k--] = 'L';
            }
        }
        left = right;
        i = j+1;
    }
    return s.join(''); //将数组作为字符串返回
};