// 1616 分割两个字符串得到回文串
// 给你两个字符串 a 和 b，他们长度相同。
// 请选择一个下标，将两个字符串都在相同的下标割开
// 如果 a前部分+b后部分 或者 b前部分+a后部分 能构成回文串，那么返回 ture
// 可以为空

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  return check(a, b) || check(b, a);
};

const check = (a, b) => {
  const n = a.length;
  let left = 0,
    right = n - 1;
  // 双指针找到切分点
  while (left < right && a[left] === b[right]) {
    left++;
    right--;
  }
  console.log(left,right)
  if (left >= right) {
    return true;
  }
  // 分割点不是left 就是 right,选择两个字母分别作为前缀校验
  return checkAdvanced(a, left, right) || checkAdvanced(b, left, right);
};

const checkAdvanced = (a, left, right) => {
  while (left < right && a[left] == a[right]) {
    left++;
    right--;
  }
  return left >= right;
};

a = "ulacfd";
b = "jizalu";
console.log(checkPalindromeFormation(a,b))