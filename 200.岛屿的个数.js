/* eslint-disable eqeqeq */
/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿的个数
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let count = 0;
  const myGrid = grid;
  const DFS = function (i, j) {
    if (i < 0 || j < 0 || i >= myGrid.length || j >= myGrid[i].length) return;
    if (myGrid[i][j] == 0) return;
    myGrid[i][j] = 0;
    DFS(i - 1, j);
    DFS(i, j - 1);
    DFS(i + 1, j);
    DFS(i, j + 1);
  };
  for (let i = 0; i < myGrid.length; i += 1) {
    for (let j = 0; j < myGrid[i].length; j += 1) {
      if (myGrid[i][j] == 1) {
        count += 1;
        DFS(i, j);
        // console.log(myGrid);
      }
    }
  }
  return count;
};
/*
console.log(numIslands(
  [
    ['1', 1, '0', '0', '0'],
    ['1', '1', '0', 0, '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ],
));
// */
