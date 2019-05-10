import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [[null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]],
      columns: Array(7).fill(0),
      currentPlayer: 'red',
    }

    // this.checkValidMove = this.checkValidMove.bind(this);
    // this.getCurrentRow = this.getCurrentRow.bind(this);
    // this.updateBoard = this.updateBoard.bind(this);
    this.checkWin = this.checkWin.bind(this);
    // this.updateCols = this.updateCols.bind(this);
    // this.updateTurn = this.updateTurn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  createEmptyBoard() {
    return [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]];
  }

  createEmptyColumns() {
    return Array(7).fill(0);
  }

  restartGame() {
    let newBoard = this.createEmptyBoard();
    let newCols = this.createEmptyColumns();
    this.setState({
      board: newBoard,
      columns: newCols,
      currentPlayer: 'red'
    })
  }

  displayBoard() {
    var board = [];
    for (var row = 5; row >= 0; row--) {
      for (var col = 0; col < 7; col++) {
        board.push(<div className="tile" row={row} col={col}>
          {this.state.board[row][col] === 'red' && <RedPiece />}
          {this.state.board[row][col] === 'blue' && <BluePiece />}
        </div>);
      }
    }
    return board;
  }

  checkValidMove(col) {
    if (this.state.columns[col] > 5) {
      return false;
    } else {
      return true;
    }
  }

  getCurrentRow(col) {
    return this.state.columns[col];
  }

  updateBoard(row, col, player) {
    let updatedBoard = this.state.board.slice(0);
    updatedBoard[row][col] = player;

    this.setState({
      board: updatedBoard
    })
  }

  checkWin(row, col, player) {
    var hasWon = false;

    const checkVerts = (row, col) => {
      var sum = 1;
      var u = row;
      while (u - 1 >= 0 && this.state.board[u - 1][col] === player) {
        sum++;
        u--;
      }

      if (sum >= 4) {
        hasWon = true;
      }
    }

    const checkHors = (row, col) => {
      var sum = 1;
      var l = col;
      while (l - 1 >= 0 && this.state.board[row][l - 1] === player) {
        sum++;
        l--;
      }
      var r = col;
      while (r + 1 < 7 && this.state.board[row][r + 1] === player) {
        sum++;
        r++;
      }
      if (sum >= 4) {
        hasWon = true;
      }
    }

    const checkMaj = (row, col) => {

      var sum = 1;
      var u = row;
      var l = col;
      while (u + 1 < 6 && l - 1 >= 0 && this.state.board[u + 1][l - 1] === player) {
        sum++;
        u++;
        l--;
      }
      var d = row;
      var r = col;
      while (d - 1 >= 0 && r + 1 < 7 && this.state.board[d - 1][r + 1] === player) {
        sum++;
        d--;
        r++;
      }
      if (sum >= 4) {
        hasWon = true;
      }
    }

    const checkMin = (row, col) => {
      var sum = 1;
      var u = row;
      var r = col;
      while (u + 1 < 6 && r + 1 < 7 && this.state.board[u + 1][r + 1] === player) {
        sum++;
        u++;
        r++;
      }
      var d = row;
      var l = col;
      while (d - 1 >= 0 && l - 1 >= 0 && this.state.board[d - 1][l - 1] === player) {
        sum++;
        d--;
        l--;
      }
      if (sum >= 4) {
        hasWon = true;
      }
    }

    checkVerts(row, col);
    checkHors(row, col);
    checkMaj(row, col);
    checkMin(row, col);
    return hasWon;
  }


  updateCols(col) {
    let updatedCols = this.state.columns.slice();
    updatedCols[col]++;

    this.setState({
      columns: updatedCols
    });
  }

  updateTurn() {
    let nextPlayer = this.state.currentPlayer === 'red' ? 'blue' : 'red';
    this.setState({
      currentPlayer: nextPlayer
    });
  }

  handleClick(e) {
    let col = Number(e.target.getAttribute('col'));
    let row = this.getCurrentRow(col);
    if (!this.checkValidMove(col)) {
      alert('Invalid move!');
      return;
    }

    this.updateBoard(row, col, this.state.currentPlayer);
    if (this.checkWin(row, col, this.state.currentPlayer)) {
      alert(`congrats, ${this.state.currentPlayer} won!`);
      this.restartGame();
      return;
    } else {
      this.updateCols(col);
      this.updateTurn();
    }
  }


  render() {
    return (
      <div>
        <div id="title">CONNECT FOUR</div>
        <div id="insert">
          {this.state.columns.map((col, index) => {
            return (
              <div className={`insert-tile ${this.state.currentPlayer}-insert`} col={index} onClick={this.handleClick}>
              </div>
            )
          })}
        </div>
        <div id="board">{this.displayBoard()}</div>
        <div id="turn">current player: {this.state.currentPlayer}</div>
        <div id="btn"><button id="newgame-btn" onClick={this.restartGame}>START NEW GAME</button></div>
      </div>
    );
  }
};

const RedPiece = (props) => (
  <div className="red-piece" />
);

const BluePiece = (props) => (
  <div className="blue-piece" />
);




ReactDOM.render(<App />, document.getElementById('app'));