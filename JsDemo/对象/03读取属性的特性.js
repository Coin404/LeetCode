var book = {
  };

// 定义多个属性
Object.defineProperties(book, {
  year: {
    get: function () {
      return this._year;
    },
    set: function (newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2000;
      }
    },
  },
  _year:{
    value:2010,
  },
  edition:{
    value:1,
  }
});

var descriptor = Object.getOwnPropertyDescriptor(book,"_year")
console.log(descriptor)
