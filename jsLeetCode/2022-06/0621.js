// IP地址无效化
// 用 [.] 代替了每个 .

/**
 * @param {string} address
 * @return {string}
 */
// 60ms   41MB
 var defangIPaddr = function(address) {
    return address.replace(/\./g,'[.]')
    // return address.replaceAll('\.', '[.]');
};

const address = "255.100.50.0"
console.log(defangIPaddr(address))