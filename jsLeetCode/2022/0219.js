//煎饼排序 969
//给你一个整数数组arr，使用煎饼翻转完成对数组的排序
//每次选最大的，翻到前面，然后翻到最后

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    const ret = [];
    for(let n =arr.length;n >1;n--){
        //遍历到只剩一个的时候结束了
        let index =0;
        for(let i=1;i<n;i++){
            if(arr[i]>=arr[index]){
                index = i;
            }
            //找到最大的那个
        }
        if(index == n-1){
            //此时index的位置正确，不做处理
            continue;
        }
        //翻转1没有意义
        if(index !=0){
            reverse(arr,index);
            ret.push(index+1);
        }
        reverse(arr,n-1);
        //数组从0开始
        ret.push(n);
        //按照要求翻转数组,两次翻转一个数值就位
        
    }
    return ret;
};
//数组翻转
const reverse=(arr,end)=>{
    for(let i =0,j=end;i<j;i++,j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
const arr = [3,2,4,1];
const answer = pancakeSort(arr);
console.log(answer);