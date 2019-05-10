/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */
class Node {
  constructor() {
    this.end = false;
    this.next = {};
  }
}

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
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const ret = [];
  const trie = new Trie();
  const map = new Set();
  const DFS = function (i, j, cur) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
    if (map.has(`${i}${j}`)) return;
    const nCur = cur + board[i][j];
    if (!trie.startsWith(nCur)) return;
    if (trie.search(nCur) && ret.indexOf(nCur) === -1) {
      ret.push(nCur);
    }
    map.add(`${i}${j}`);
    let ni = 0; let nj = 0;
    ni = i - 1; nj = j;
    DFS(ni, nj, nCur);
    ni = i + 1; nj = j;
    DFS(ni, nj, nCur);
    ni = i; nj = j - 1;
    DFS(ni, nj, nCur);
    ni = i; nj = j + 1;
    DFS(ni, nj, nCur);
    map.delete(`${i}${j}`);
  };
  for (let i = 0; i < words.length; i += 1) {
    trie.insert(words[i]);
  }
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      DFS(i, j, '');
    }
  }
  return ret;
};

/*
const words = ['oath', 'pea', 'eat', 'rain'];
const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
// const words = ['aaa'];
// const board = [['a', 'a']];
console.log(findWords(board, words));
// */
