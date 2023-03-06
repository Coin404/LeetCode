// 复写零  1089
// 给定一个长度固定的整数数组arr，请你将该数组中出现的每个零都复写一遍
// 并将其余的元素向右平移
// 注意：请不要再超过该数组长度的位置写入元素
// 要求：对输入的数组就地进行上述修改，不要从函数返回任何东西

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// 暴力后移，不考虑

// 记忆搜索 64ms  43.7MB
var duplicateZeros = function (arr) {
  // 第一次遍历，记录遇到的0的次数
  const len = arr.length;
  let cur = 0;
  let i = 0;
  while (cur < len) {
    if (arr[i++] == 0) {
      cur += 2;
    } else {
      cur += 1;
    }
  }
  // 从停止的地方开始移动数字遇到0补两位
  i -= 1;
  // 可能超出
  if (cur > arr.length) {
    cur = arr.length;
    arr[--cur] = arr[i--];
  }
  for (i; i >= 0; i--) {
    arr[--cur] = arr[i];
    if (arr[i] == 0) {
      arr[--cur] = 0;
    }
  }
};

// 官方解 72ms  43.8MB
// 双指针 模拟栈，用两个指针来标记栈顶位置和现在需要放置的位置
//  top标记栈顶位置 ，i 来标记现在需要仿制的元素位置
// 找到原数组中对于防止在最后位置的元素，然后在该数组崔后从该位置往前来模拟放置
var duplicateZeros1 = function (arr) {
  const n = arr.length;
  let top = 0;
  let i = -1;
  while (top < n) {
    i++;
    if (arr[i] !== 0) {
      top++;
    } else {
      top += 2;
    }
  }
  let j = n - 1;
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] === 0) {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }
};
