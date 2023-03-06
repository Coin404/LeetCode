// 1653 使字符串平衡的最少删除次数
// 给你一个字符串 s，它仅包含字符 ‘a’ 和 ‘b’
// 你可以删除 s 中任意数目的字符，使 s 平衡。当不存在下标对（i,j）满足i<j,且s[i] ='b'的同时s[j]='a'
// 此时认为s平衡，返回最少的删除次数

// 删除结束 a 全在前面，b全在后面
// 前缀的含b量 ，后缀的含a量，以某个点分割就意味着 需要删除其 前缀的b，后缀的a
// 时间复杂度意外的很高
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  const splitArr = new Array(n).fill(0);
  let countA = 0;
  let ans = Number.MAX_VALUE;
  for (let i = 1; i < n; i++) {
    if (s[i-1] == "b") {
      splitArr[i] = splitArr[i - 1] + 1;
    } else {
      splitArr[i] = splitArr[i - 1];
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (s[i+1] == "a") {
      countA++;
      ans = Math.min(ans, splitArr[i] + countA);
    } else {
      ans = Math.min(ans, splitArr[i] + countA);
    }
  }
  return ans
};

s='"aababbab"'
console.log(minimumDeletions(s))