// 433 最小基因变化
// 基因序列可以表示为一条由8个字符组成的字符串，其中每个字符都是 ABGT 之一
// 假设我们需要调查从基因序列start变为end所发生的基因变化
// 另有一个基因库bank记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列
// 给两个基因序列start end 以及一个基因库bank，找出并返回能使start变为end的最少变化次数，如果无法完成返回-1
// 其实start默认有效。但是并不一定会出现基因库


/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    const cnt = new Set()
    const visited = new Set()
    const keys  = ['A','C','G','T']
    if(start === end){
        return 0
    }
    for(const w of bank){
        cnt.add(w)
    }
    if(!cnt.has(end)){
        return -1
    }
    // 队列进行广度遍历
    const queue = [start]
    visited.add(start)
    let step = 1
    while(queue.length){
        const sz = queue.length
        for(let i=0 ; i< sz ; i++){
            const curr = queue.shift()
            // 出队遍历基因序列的每一列
            for(let j = 0 ;j <8 ;j++) {
                for(let k = 0;k< 4;k++){
                    if(keys[k] != curr[j]) {
                        // 对curr中的某一位进行替换
                        const sb = [...curr]
                        sb[j] = keys[k]
                        const next = sb.join('')
                        if(!visited.has(next) && cnt.has(next)){
                            if(next === end)
                            {
                                return step
                            }
                            // 如果没找到就入队新的，标记访问过
                            queue.push(next)
                            visited.add(next)
                        }
                    }
                }
            }
        }
        step++
    }
    return -1
};

const start = "AACCGGTT"
const end =   "AACCGGTA"
const w = ["AACCGGTA"]
console.log(minMutation(start,end,w))