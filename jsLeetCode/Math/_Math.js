export function MathDefine() {
  this.sum = function (nums) {
    return eval(nums.join("+"));
  };
}
