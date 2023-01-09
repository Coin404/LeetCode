// 1806 还原排列的最少操作数
// 给你一个偶数n，已知存在一个长度为n的排列perm,其中perm[i] == i
// 一步操作中，你将创建一个新数组arr ，对于每个i
// 如果 i%2 == 0 ，那么 arr[i] = perm[i/2]
// 如果 i%2==1 ,那么 arr[2]=perm[n/2+(i-1)/2]

// 使perm回到排列初始值，至少需要执行多少步操作

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  const arr = new Array(n).fill(0).map((v, index) => {
    v = index;
    return v;
  });
  let perm = [...arr];
  let flag = 1;
  let count = 0;
  while (flag) {
    flag = 0;
    count++;
    const cur = [...perm]
    for (let i = perm.length-1; i > 0; i--) {
      if (i % 2 == 0) {
        perm[i] = cur[i / 2];
      } else {
        perm[i] = cur[n / 2 + (i - 1) / 2];
      }
      if (perm[i] != arr[i]) {
        flag = 1;
      }
    }
  }
  return count;
};

console.log(reinitializePermutation(6));
