// 1807 替换字符串中的括号内容
// 给你一个字符串s 它包含一些括号对，每个括号中包含一个非空的键
// 比方说字符串 "(name)is(ae)yearsold" , 两个括号对，分别包含 name age
// 你知道许多键对应的值

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  // knowlede构造map数组
  let map = new Map();
  for (let i = 0; i < knowledge.length; i++) {
    map.set(knowledge[i][0], knowledge[i][1]);
  }
  const arr = s.split(")");
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    const curArr = arr[i].split("(");
    if (curArr[1]) {
      if (map.get(curArr[1])) {
        ans = ans + curArr[0] + map.get(curArr[1]);
      } else {
        ans = ans + curArr[0] + "?";
      }
    } else {
      ans = ans + curArr[0];
    }
  }
  return ans;
};

(s = "(name)is(age)yearsold"),
  (knowledge = [
    ["name", "bob"],
    ["age", "two"],
  ]);
console.log(evaluate(s, knowledge));
