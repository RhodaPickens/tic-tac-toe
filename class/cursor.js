const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  // Use setBackgroundColor and resetBackgroundColor in cursor.js
  // to highlight the cursor's current position on the grid
  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up = () => {  // moves cursor up
    this.resetBackgroundColor();

    if (this.row !== 0) {
      this.row -= 1;
    }

    this.setBackgroundColor();
  }

  down() {  // moves cursor down
    this.resetBackgroundColor();

    if (this.row !== 2) {
      this.row += 1;
    }

    this.setBackgroundColor();
  }

  left() {  // moves cursor left
    this.resetBackgroundColor();

    if (this.col !== 0) {
      this.col -= 1;
    }

    this.setBackgroundColor();
  }

  right() { // moves cursor right
    this.resetBackgroundColor();

    if (this.col !== 2) {
      this.col += 1;
    }

    this.setBackgroundColor();
  }

}


module.exports = Cursor;
