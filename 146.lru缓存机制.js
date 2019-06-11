/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.map = {};
  this.LRU = Array(capacity);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let ret = -1;
  if (this.LRU.indexOf(key) !== -1) {
    ret = this.map[key];
    this.LRU.splice(this.LRU.indexOf(key), 1);
    this.LRU.unshift(key);
  }
  return ret;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.LRU.indexOf(key) !== -1) {
    this.LRU.splice(this.LRU.indexOf(key), 1);
    this.LRU.unshift(key);
  } else {
    delete this.map[this.LRU.pop()];
    this.LRU.unshift(key);
  }
  this.map[key] = value;
  // console.log(this.LRU);
  // console.log(this.map);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
const cache = new LRUCache(2);
console.log(cache.get(2));
console.log(cache.put(2, 6));
console.log(cache.get(1));
console.log(cache.put(1, 5));
console.log(cache.put(1, 2));
console.log(cache.get(1));
console.log(cache.get(2));
// */
