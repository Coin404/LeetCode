// LRU缓存
// 设计一个满足 LRU 最近最少使用 缓存 约束的数据结构
// 实现LRUChache类
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。

// 1812ms
// 99.8MB
// 哈希+双向链表
function Node(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.pre = null
}
function LinkedList() {
    this.head = new Node('head', 'head')
    this.length = 0
    this.tail = new Node('tail', 'tail')
    this.head.next = this.tail
    this.tail.pre = this.head
}

// 头插
LinkedList.prototype.headPush = function (node) {
    node.next = this.head.next
    this.head.next.pre = node
    node.pre = this.head
    this.head.next = node
}

// 找到该点取出，头插
LinkedList.prototype.upHead = function (key) {
    let node = this.head
    while (node) {
        if (node.key == key) {
            const pre = node.pre
            const next = node.next
            next.pre = pre
            pre.next = next
            this.headPush(node)
            return
        }
        node = node.next
    }
}



/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.haxiLRU = new Map();
    this.length = capacity;
    // 生成一个双循环链表
    this.link = new LinkedList()

};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.haxiLRU.has(key)) {
        // 链表中有，找到该值，并且提到头部
        this.link.upHead(key)
        return this.haxiLRU.get(key);
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.link.length < this.length && !this.haxiLRU.has(key)) {
        this.haxiLRU.set(key, value);
        // 插入头部
        const node = new Node(key, value)
        this.link.length++
        this.link.headPush(node)
    } else if (this.haxiLRU.has(key)) {
        // 移动到头部
        this.link.upHead(key)
        this.haxiLRU.set(key, value);
        this.link.head.next.value = value
    }
    if (this.link.length == this.length && !this.haxiLRU.has(key)) {
        // 满了删除最后一个节点
        const node = new Node(key, value)
        this.link.headPush(node)
        // 此为需要删除的节点
        const p = this.link.tail.pre
        this.haxiLRU.set(key, value);
        this.haxiLRU.delete(p.key)
        p.pre.next = this.link.tail
        this.link.tail.pre = p.pre
        p.pre = null
        p.key = null
        p.value = null
    }
};


// 所能想到的优化，哈希表value中存储当前的链表节点
// 来进行操作