// 1656 设计有序流
// 有n个（id , value）对，其中 id 是 1 到 n 之间的一个整数，value是一个字符串，不存在id相同的对
// 设计一个流，以任意顺序获取n个（id,value）对，并在多次调用时，按id递增的顺序返回一些值。
// OrderedStream(int n) 构造一个能接收 n 个值的流，并将当前指针 ptr 设为 1 。
// String[] insert(int id, String value) 向流中存储新的 (id, value) 对。存储后：
// 如果流存储有 id = ptr 的 (id, value) 对，则找出从 id = ptr 开始的 最长 id 连续递增序列 ，并 按顺序 返回与这些 id 关联的值的列表。然后，将 ptr 更新为最后那个  id + 1 。
// 否则，返回一个空列表。


// 220ms
// 53.1MB
var OrderedStream = function (n) {
    this.ptr = 1;
    this.streamArr = new Array(n + 1).fill(null);
  };
  
  /**
   * @param {number} idKey
   * @param {string} value
   * @return {string[]}
   */
  OrderedStream.prototype.insert = function (idKey, value) {
    this.streamArr[idKey] = value;
    const ans = [];
    while (this.streamArr[this.ptr]) {
      ans.push(this.streamArr[this.ptr] );
      this.ptr++
    }
    return ans
  };
  