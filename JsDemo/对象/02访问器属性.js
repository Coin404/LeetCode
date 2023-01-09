var book = {
  // _ 记号，表示只能通过对象方法访问的属性
  _year: 2004,
  edition: 1,
};

Object.defineProperty(book, "year", {
  // 返回有效值
  get: function () {
    return this._year;
  },
  // 写入的时候进行操作的方法
  set: function (newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2000;
    }
  },
});

console.log(book.year);
book.year = 2005;
console.log(book.edition);
