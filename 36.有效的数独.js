/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const myBoard = board;
  // eslint-disable-next-line no-shadow
  const isValid = function (board, row, col, c) {
    let sum = 0;
    for (let i = 0; i < 9; i += 1) {
      if (board[i][col] === c) sum += 1;
      if (board[row][i] === c) sum += 1;
      // eslint-disable-next-line no-bitwise
      const x = ~~(row / 3) * 3 + ~~(i / 3);
      // eslint-disable-next-line no-bitwise
      const y = ~~(col / 3) * 3 + ~~(i % 3);
      if (board[x][y] === c) sum += 1;
    }
    return sum === 3;
  };
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (myBoard[i][j] !== '.') {
        if (!isValid(myBoard, i, j, myBoard[i][j].toString())) return false;
      }
    }
  }
  return true;
};
// const answer = isValidSudoku([
//   ['1', '8', '7', '6', '5', '4', '3', '2', '1'],
//   ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['9', '.', '.', '.', '.', '.', '.', '.', '.']]);
// console.log(answer);
