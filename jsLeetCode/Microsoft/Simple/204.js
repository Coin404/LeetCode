// 计数质数
// 给定整数n，返回所有小于非负整数n的质数的数量

/**
 * @param {number} n
 * @return {number}
 */

// 0，1的话为0 2的话为1
// 3以上只计算奇数
// 多一个标志位，进行
// 292ms
// 107MB
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  const primes = [];
  if (n == 0 || n == 1 || n == 2) {
    return 0;
  } 

  for (let i = 3; i < n; i += 2) {
    if (isPrime[i]) {
      primes.push(i);
    }
    // 标记不是素数的数
    for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
      isPrime[i * primes[j]] = 0;
    //  例如 15的时候 刚开始标记 45 下一次标记75 🌟
    //  x * p[j+1]   =>  (x = p[i] * mod)  mod *p[i+1]  时会遍历
    //  但是 75 可以被 25 * 3 标记，所以没有必要继续标记了
      if( i % primes[j] == 0){
        break
      }
    }
  }
  primes.push(2);
  return primes.length;
};


countPrimes(76)