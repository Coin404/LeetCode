// 有序数组中的单一元素  540
/**
 * @param {number[]} nums
 * @return {number}
 */
//每个元素出现两次，唯有一个数只会出现一次
//要求解决方案满足 时间：log n  空间 1

//数组有序 奇数个数字 
//二分法判断中间的数字是不是要找的，如果不是那么继续二分
 var singleNonDuplicate = function(nums) {
    function halfSelect(nums,low,high)
    {
        var middle = Math.floor((low+high)/2);
        if(nums[middle] === nums[middle ^ 1])
        {
            halfSelect(nums,low,middle-1);
            halfSelect(nums,middle+1,high);
        }
        else{
            return nums[middle];
        }
    }
    var answer = halfSelect(nums,0,nums.length-1);
    return answer;
};
//爆栈，大量的递归调用

nums = [1,1,2,2,3,4,4,5,5];
var answer = singleNonDuplicate(nums);
console.log(answer);

var singleNonDuplicate1 = function(nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (nums[mid] === nums[mid ^ 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
};
//目标一定在奇数侧
//如果mid 为偶数，比较nums[mid+1]
//如果mid 为奇数，比较nums[mid-1]
//细节
//按位异或的性值可以得到mid和相邻的数之间的关系
//mid 为偶数时候  mid+1 = mid ^ 1
//mid 为奇数时候  mid-1 = mid ^ 1


//毫无疑问，该数的位置一定为偶数，所以不需要全数组范围二分
//只需要在偶数下标二分
//每次Mid取到奇数就减一
//mid 是偶数的时候 mid & 1 = 0 ;
//mid 是奇数的时 mid & 1 = 1
var singleNonDuplicate2 = function(nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((high - low) / 2) + low;
        mid -= mid & 1;
        if (nums[mid] === nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return nums[low];
};

//如果是o(n复杂度)
//位运算两次，如果是出现两次就是消除  ans ^= num