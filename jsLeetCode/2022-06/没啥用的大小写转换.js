const a = 2413132352;
function change(a) {
  const str = ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿","拾", "佰", "仟"];
  // const numberMap = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]
  let show = "";
  let num = a;
  let i = 0;
  while (num != 0) {
    const number = num % 10;
    num = Math.floor(num / 10);
    i < 12 ? (show = number+ str[i++] + show) : (show = number  + show);
  }
  return show
}

change(a);
