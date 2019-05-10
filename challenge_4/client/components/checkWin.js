
const checkWin = (board, row, col, player) => {
  var hasWon = false;

  const checkN = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row + 1][col] === player) {
        checkN(row + 1, col, sum + 1);
      }
    }
  };

  const checkNW = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row + 1][col - 1] === player) {
        checkNW(row + 1, col - 1, sum + 1);
      }
    }
  };

  const checkNE = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row + 1][col + 1] === player) {
        checkNE(row + 1, col + 1, sum + 1);
      }
    }
  };

  const checkE = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row][col + 1] === player) {
        checkE(row, col + 1, sum + 1);
      }
    }
  };

  const checkW = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row][col - 1] === player) {
        checkW(row, col - 1, sum + 1);
      }
    }
  };

  const checkS = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row - 1][col] === player) {
        checkS(row - 1, col, sum + 1);
      }
    }
  };

  const checkSW = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row - 1][col - 1] === player) {
        checkSW(row - 1, col - 1, sum + 1);
      }
    }
  };

  const checkSE = (row, col, sum) => {
    if (sum === 4) {
      hasWon = true;
      return;
    } else {
      if (board[row - 1][col + 1] === player) {
        checkSE(row - 1, col + 1, sum + 1);
      }
    }
  };

  checkN(row, col, 1);
  // checkNW(row, col, 1);
  // checkNE(row, col, 1);
  // checkE(row, col, 1);
  // checkW(row, col, 1);
  // checkS(row, col, 1);
  // checkSW(row, col, 1);
  // checkSE(row, col, 1);

  return hasWon;
}

export default { checkWin };