/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const solveSudoku = function (board) {
  const myBoard = board;
  // eslint-disable-next-line no-shadow
  const isValid = function (board, row, col, c) {
    for (let i = 0; i < 9; i += 1) {
      if (board[i][col] !== '.' && board[i][col] === c) return false;
      if (board[row][i] !== '.' && board[row][i] === c) return false;
      // eslint-disable-next-line no-bitwise
      const x = ~~(row / 3) * 3 + ~~(i / 3);
      // eslint-disable-next-line no-bitwise
      const y = ~~(col / 3) * 3 + ~~(i % 3);
      if (board[x][y] !== '.' && board[x][y] === c) return false;
    }
    return true;
  };
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (myBoard[i][j] === '.') {
        for (let x = 1; x < 10; x += 1) {
          if (isValid(myBoard, i, j, x.toString())) {
            myBoard[i][j] = x.toString();
            if (solveSudoku(myBoard)) return myBoard;
            myBoard[i][j] = '.';
          }
        }
        return false;
      }
    }
  }
  return myBoard;
};
// const answer = solveSudoku([
//   ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
//   ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['9', '.', '.', '.', '.', '.', '.', '.', '.']]);
// console.log(answer);
