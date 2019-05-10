/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */
class Node {
  constructor() {
    this.end = false;
    this.next = {};
  }
}

/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const c = word[i];
      if (!Object.prototype.hasOwnProperty.call(node.next, c)) {
        node.next[c] = new Node();
      }
      node = node.next[c];
    }
    node.end = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const c = word[i];
      if (!(Object.prototype.hasOwnProperty.call(node.next, c))) {
        return false;
      }
      node = node.next[c];
    }
    return node.end;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i += 1) {
      const c = prefix[i];
      if (!(Object.prototype.hasOwnProperty.call(node.next, c))) {
        return false;
      }
      node = node.next[c];
    }
    return true;
  }
}


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
/*
const trie = new Trie();

trie.insert('apple');
console.log(trie.search('apple')); // 返回 true
console.log(trie.search('app')); // 返回 false
console.log(trie.startsWith('app')); // 返回 true
trie.insert('app');
console.log(trie.search('app')); // 返回 true
// */
