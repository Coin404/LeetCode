// 优势洗牌 870
// 给定两个大小相等的数组nums1和nums2，nums1相对于nums的优势可以满足 nums1[i] > nums2[i]的索引i的树木来描述
// 返回nums1的任意序列，使其相对于nums2的优势最大化

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 两个数组进行排序
// 272ms
// 68.8MB
 var advantageCount = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>{
        return a-b
    })
    nums2 = nums2.map((v,index)=>{
        v = [v,index]
        return v
    })
    nums2 = nums2.sort((a,b)=>{
        return a[0]-b[0]
    })
    // 双指针，如果nums1 > nums2 插入对应数组对应位置，
    // 如果不大于，插入nums2最大的数字后面
    let i=0,j=0
    let last  = nums2.length-1
    const ans = new Array(nums1.length).fill(0)
    while(i<nums1.length && j <= last){
        if(nums1[i] >nums2[j][0])
        {
            ans[nums2[j][1]] = nums1[i]
            i++
            j++
        }else{
            ans[nums2[last][1]] = nums1[i]
            i++
            last--
        }
    }
    // console.log(nums1)
    // console.log(nums2)
    return ans
};

nums1 = [2,7,11,15], nums2 = [1,10,4,11]
console.log(advantageCount(nums1,nums2))