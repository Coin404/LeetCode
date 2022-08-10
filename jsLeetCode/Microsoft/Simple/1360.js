// 日期之间隔几天
// 编写一个程序来计算两个日期之间间隔来多少天
// 日期以字符串的形式给出，格式为YYYY-MM-DD
// 给定的日期是 1971 年 到 2100年之间的有效日期

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

// 64ms
// 41.3MB
// 计算 1971年与给定数字相差的日期
var daysBetweenDates = function (date1, date2) {
  const days1 = daysBetween1971(date1);
  const days2 = daysBetween1971(date2);
  return Math.abs(days2 - days1);
};
// 计算与 1971-1-1之间的日期差
var daysBetween1971 = function (date) {
  const cur = date.split("-");
  console.log(cur);
  const year = cur[0];
  const month = cur[1];
  const day = cur[2];
  let days = 0;
  let months = 0;
  // 当前年是润年，月份不一样
  if (isLeapYear(year)) {
    months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  let i = 1971;
  while (i < year) {
    if (isLeapYear(i)) {
      days += 366;
    } else {
      days += 365;
    }
    i++;
  }
  i = 1;
  while (i < month) {
    days += months[i-1];
    i++
  }
  i = 1;
  while (i < day) {
    days += 1;
    i++;
  }
  return days;
};

// 判断是否是闰年
var isLeapYear = function (year) {
  if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
    return true;
  }
  return false;
};

const date1 = "2074-09-12";
const date2 = "1971-02-28";
console.log(daysBetweenDates(date1, date2));
