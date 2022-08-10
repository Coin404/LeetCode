var daysBetweenDates = function (date1, date2) {
    const days1 = daysBetween1971(date1);
    const days2 = daysBetween1971(date2);
    let ans = -days1.days + days2.days
    console.log(ans)
    // 计算两年之间的时间
    ans += (days2.year - days1.year)*365
    // 加上闰年的数量
    ans += Math.floor((days2.year-1) / 4) - Math.floor((days1.year-1)/4)
    ans -= Math.floor((days2.year-1) / 100) - Math.floor((days1.year-1)/100)
    ans += Math.floor((days2.year-1) / 400) - Math.floor((days1.year-1) /400)
    return Math.abs(ans);
  };
  // 计算与 当前年-1-1之间的日期差
  var daysBetween1971 = function (date) {
    const cur = date.split("-");
    const year = cur[0];
    const month = cur[1];
    const day = cur[2];
    let days = 0;
    let months = 0;
    i = 1;
    if (isLeapYear(year)) {
        months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      } else {
        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      }
    while (i < month) {
      days += months[i-1];
      i++
    }
    i = 1;
    while (i < day) {
      days += 1;
      i++;
    }
    return {year,days};
  };
  
  // 判断是否是闰年
  var isLeapYear = function (year) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      return true;
    }
    return false;
  };
  
  const date1 = "2019-06-29";
  const date2 = "2019-06-30";
  console.log(daysBetweenDates(date1, date2));
  