// 2325 解密消息
// 给定一个字符串 key 和 message 分别表示一个加密密钥和一段加密消息。
// 解密如下 使用 key中26个消息字母第一次出现的顺序作为替换表中字母的顺序

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

// 处理key得到键值对
var decodeMessage = function (key, message) {
  const obj = {};
  let j = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " " && !obj.hasOwnProperty(key[i])) {
      obj[key[i]] = j++;
    }
  }
  message = message.split("")
  for (let i = 0; i < message.length; i++) {
    if(message[i] !== " " ){
        message[i] = String.fromCharCode(obj[message[i]] + "a".charCodeAt());
    }
  }
  return message.join("")
};

(key = "the quick brown fox jumps over the lazy dog"),
  (message = "vkbs bs t suepuv");
console.log(decodeMessage(key, message));
