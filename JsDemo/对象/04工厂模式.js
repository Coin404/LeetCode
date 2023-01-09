// 用函数封装以特定接口创建对象的细节
function createPerson(name, age, job) {
  const obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}

var person1 = createPerson("CONI",19,"AAA")
person1.sayName()
