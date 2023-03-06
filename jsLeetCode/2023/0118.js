// 2299 强密码校验器
// 至少有8个字符
// 至少一个小写字母
// 至少一个大写字母
// 至少有一个数字
// 至少一个特殊字符 !@#$%^&*()-+
// 不包含连续的两个字符

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }
  let flag = [0, 0, 0, 0];
  const arr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
  const str = '!@#$%^&*()-+'
  for (let i = 0; i < password.length; i++) {
    const small = password[i].charCodeAt() - "a".charCodeAt();
    const big = password[i].charCodeAt() - "A".charCodeAt();

    if (i != 0 && password[i] == password[i - 1]) {
      return false;
    }
    if (password[i] >= 0 && password[i] <= 9) {
      flag[0] = 1;
    } else if (small < 26 && small >= 0) {
      flag[1] = 1;
    } else if (big < 26 && big >= 0) {
      flag[2] = 1;
    } else if (arr.includes(password[i])) {
      flag[3] = 1;
    }
  }

  for (let i = 0; i < flag.length; i++) {
    if (!flag[i]) {
      return false;
    }
  }
  return true;
};


console.log(strongPasswordCheckerII('124s1241S2@412'))