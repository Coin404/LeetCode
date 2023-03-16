// 2383 赢得比赛需要的最少训练时长
// 两个正整数 initialEnergy 和 initialExperience 表示初始精力和初始经验
// 给定两个整数数组 energy 和 experience
// 你会依次遇到n 个对手，你必须在经验和精力上严格超过对手才能击败
// 击败 第 i 个对手会增加经验，但是减少经历
// 开始比赛前你需要训练，每一小时 +1 经验或者精力
// 返回 n

/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */

// 精力为累加，毫无疑问
// 经验需要初始值+前缀和 > 当前
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let needEnergy = eval(energy.join("+")) + 1 - initialEnergy;
  if(needEnergy<0){
    needEnergy = 0
  }

  let needExperience = 0;
  let curExperience = initialExperience;
  const n = experience.length;
  for (let i = 0; i < n; i++) {
    // 大于不需要训练
    if (curExperience > experience[i]) {
        curExperience+=experience[i]
    }else{
        needExperience+=(experience[i]-curExperience+1)
        curExperience = experience[i]*2+1
    }
  }
  if(needExperience<0){
    needExperience = 0
  }
  return needEnergy + needExperience;
};

(initialEnergy = 100),
  (initialExperience = 100),
  (energy = [1, 4, 3, 2]),
  (experience = [2, 6, 3, 1]);
console.log(
  minNumberOfHours(initialEnergy, initialExperience, energy, experience)
);
