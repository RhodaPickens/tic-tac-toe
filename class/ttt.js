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

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
   // empty grid should return false

    // Check for horizontal wins
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      console.log(row);

      if (row.every((el) => el === 'X')) {
        return 'X';
      } else if (row.every((el) => el === 'O')) {
        return 'O';
      }
    }

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

let grid = [[' ',' ',' '],
            ['O','O','O'],
            [' ',' ',' ']]
console.log(TTT.checkWin(grid));

module.exports = TTT;
