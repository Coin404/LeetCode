// 1636 按照频率将数组升序排序
// 给你一个整数数组nums,请你将数组按照每个值的频率升序排序，如果多个值的频率相同，请按照数值本身将他们降序排序


// 200ms
// 48.2MB
var frequencySort = function(nums) {
    const cnt = new Map();
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    nums.sort((a, b) => {
        // a后,b前  -1交换顺序
        console.log(a,b)
        // a频率低 a-b<0 交换顺序    a到前面，b到后面
        const cnt1 = cnt.get(a), cnt2 = cnt.get(b);
        return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
    });
    return nums;
};


nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));
