//给定一个字符串，用字符串中的字母来拼凑尽可能多的balloon 1189
/**
 * @param {string} text
 * @return {number}
 */

//设置一个数组来存储字符串中有几个b a l o n然后把l和O的数量/2
//数组的最大个数为单词数目
//其实数组就行，练习对象！
 var maxNumberOfBalloons = function(text) {
     var obj = {
        a : 0,
        b : 0,
        l : 0,
        o : 0,
        n : 0,
     }
    for(var i = 0 ; i < text.length;i++){
        for(var j in obj){
            if(text[i] == j){
                obj[j]++;
            }
        }
    }
    answer = obj.a;
    for(var i in obj){
        if(i == 'l' || i == 'o'){
            obj[i] = Math.floor(obj[i] / 2);
            console.log(obj[i]);
        }
        answer = answer < obj[i] ? answer:obj[i];
    }
    return answer;
};

var text = 'balon';
maxNumberOfBalloons(text);