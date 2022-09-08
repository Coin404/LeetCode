// 667 优美的排列 2
// 给你两个整数n和k,请你构造一个答案列表answer，该列表应当包含从1到n个不同正整数
// 假设该列表是  answer = [1,2,3,4,5...,n]
// 那么列表  【1-2，2-3，3-4.。。。。n-1 - n】中应该仅有k个不同的整数
// 以上数字都表示下标、

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 偶数填充 1 ， 2， 3， 4，
// 奇数填充 K+1，k ， k-1
//  后面 k+1 顺序填充
// 72ms
// 42.7MB
var constructArray = function (n, k) {
  const ans = [];
  let j = 1
  for (let i = 1 ; i <= k+1; i++) {
    if( (i & 1) != 0){
        ans.push(j); 
    }else{
        ans.push(k +2 - j);
        j++
    }
  }
  for (let i = k+1; i < n; i++) {
    ans.push(i+1);
  }
  return ans;
};
(n = 50), (k = 20);
console.log(constructArray(n, k));
