// 排序的循环链表 029
// 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素insertVal
// 使这个列表仍然是循环升序的
// 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针
// 如果有多个满足条件的插入位置，可以任意选一个位置插入新的值，插入后整个列表仍然保持有序
// 如果列表为空（给定节点是null），需要创建一个循环有序列表并返回这个节点，否则，请返回原先给定的节点

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

// 这是数组的形式,可惜他不是数组
 var insert = function(head, insertVal) {
    // insertVal如果小于第一个数，记录该数的值往后遍历
    // insertVal如果大于第一个数,插入在第一个大于insterVal的数前,如果没有,插入在第一个小于前一个数的数前
    // 0 标识小于
    let flag  = 0
    let index = 0 
    let i = 0
    if(head[0] > insertVal) {
        while(i < head.length){
            // 插入在第一个小于他的数前面,或者flag变化处
            if(head[i] < insertVal){
                index = i
                break
            }
            if(head[i] < head[i-1]){
                index = i
                break
            }
            i++
        }
    } else{
        // 遍历,记住第一个数
        while(i < head.length){
            if(head[i] < head[i-1]){
                flag  = 1
            }
            if(flag ==1){
                // 此时就是正序数列,插入在第一个大于他的位置
                if(head[i] > insertVal ){
                    index = i
                    break
                }
            }
            i++
        }
        // 如果本身是正序,那就需要插入在初始位置
    }
    head.splice(index+1,0,insertVal)
    return head
};

const head =[3,4,1]
const insertVal = 2
console.log(insert(head,insertVal))


//  80ms
// 42.9MB
var insert1 = function(head,insertVal){
    const node = new Node(insertVal)
    if(!head){
        node.next = node
        return node
    }

    if(head.next == head){
        head.next = node
        node.next = head
        return head
    }

    let curr = head , next = head.next
    while(next != head){
        // 如果 前面的数小于他 后面的数大于他,直接就是插入位置
        if(insertVal >= curr.val && insertVal <= next.val){
            break
        }
        // 如果是链表末端
        if(curr.val >next.val){
            // 大于最后一个数,或者小于第一个数
            if(insertVal > curr.val || insertVal < next.val){
                break
            }
        }
        curr = curr.next
        next = next.next
    }
    curr.next = node
    node.next = next
    return head
}