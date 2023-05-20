const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Create commands for cursor movement in ttt.js
    // that call cursor.up, cursor.down, cursor.left, and cursor.right

    Screen.addCommand('up', 'move up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move right', this.cursor.right.bind(this.cursor));

    Screen.render();
  }

  // Flip grid so vertical column becomes horizontal row
  static flipGrid(grid) {
    let newGrid = [];
    for (const col in grid) { //iterate through column of grid
      let flipped = grid.map(row => row[col]); // iterate through column element
      newGrid.push(flipped);
    }
    return newGrid;
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended or it is empty

    const flippedGrid = TTT.flipGrid(grid);

    // Check for horizontal wins
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];

      if (row.every((el) => el === 'X')) {
        return 'X';
      } else if (row.every((el) => el === 'O')) {
        return 'O';
      }
    }

    // Check for vertical wins
    for (let i = 0; i < flippedGrid.length; i++) {
      let row = flippedGrid[i];

      if (row.every((el) => el === 'X')) {
        return 'X';
      } else if (row.every((el) => el === 'O')) {
        return 'O';
      }
    }

    // Check for diagonal wins
    // Check if all diagonal cells are the same, and not empty, then return the letter
    if (
      (grid[0][0] === grid[1][1]) &&
      (grid[1][1] === grid[2][2]) &&
      (grid[0][0] !== ' ' )) {
      return grid[0][0];
    } else if (
      (grid[0][2] === grid[1][1]) &&
      (grid[1][1] === grid[2][0]) &&
      (grid[0][2] !== ' ')) {
      return grid[0][2];
    }

    // Recognizes ties
    // check if grid full but no winner
    // iterate through matrix, if no empty spaces then return 'T'
    if (grid.every((row) => row.every((space) => space !== " "))) {
      return 'T';
    }

    // return false if empty or game not ended
    if (this.grid = [[' ',' ',' '],
                      [' ',' ',' '],
                      [' ',' ',' ']]) {
        return false;
    }

  }


  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

// Examples
// let grid = [[' ',' ',' '],
//             ['O','O','O'],
//             [' ',' ',' ']]
// console.log(TTT.checkWin(grid));

// grid = [['X',' ',' '],
//         ['X',' ',' '],
//         ['X',' ',' ']]
// console.log(TTT.checkWin(grid));

// grid = [['X','O','X'],
//         ['X','O','O'],
//         ['O','X','O']]
// console.log(TTT.checkWin(grid)); // 'T'

// grid = [['X',' ',' '],
//         [' ','X',' '],
//         [' ',' ','X']]
// console.log(TTT.checkWin(grid)); // 'X'

// grid = [[' ',' ','O'],
//         [' ','O',' '],
//         ['O',' ',' ']]

// console.log(TTT.checkWin(grid)); //'O'

module.exports = TTT;
