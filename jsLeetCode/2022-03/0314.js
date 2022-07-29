//599 两个列表的最小索引总和
//用最少的索引找出共同喜爱的餐厅，答案只一个，且总是存在
// list 中的元素是唯一的


/**
//  * @param {string[]} list1
//  * @param {string[]} list2
//  * @return {string[]}
 */

// 两层遍历直接hash
 var findRestaurant = function(list1, list2) {
    const index = new Map();
    // set可以去重
    for(let i = 0;i < list1.length;i++){
        index.set(list1[i],i)
    }
    const ret = [];
    // 记录目前的索引最大值
    let indexSum = Number.MAX_VALUE;
    for(let i = 0; i < list2.length; i++) {
        // 如果2在index数组中存在
        if(index.has(list2[i])) {
            const j = index.get(list2[i])
            if ( i + j < indexSum) {
                ret.length = 0;
                ret.push(list2[i]);
                indexSum = i + j;
            } else if (i + j === indexSum){
                ret.push(list2[i]);
            }
        }
    }
    return ret;
};