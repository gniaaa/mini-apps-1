import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(7).fill(Array(6).fill(null)),
      columns: Array(7).fill(0),
      currentPlayer: 'red',
    }
  }

  checkWin(coord, player) {
    // coord is [x, y] ==> [row, col]
    // player is either 'red', 'black'
    // check vertical

    // check horizontal
    // check major diag
    // check minor diag
  }

  // updates board arrays with 'red' or 'black'
  // updates columns to next available row
  // TODO: do not let the player add to col if row is at 7 -- ALL FULL
  updateBoard(col, player) {
    let nextAvailableRow = this.state.columns[col];
    let updatedBoard = this.state.board.slice();
    updatedBoard[nextAvailableRow][col] = player;

    let updatedCols = this.state.columns.slice();
    updatedCols[col]++;

    this.setState({
      board: updatedBoard,
      columns: updatedCols
    });
  }

  // renderNewBoard() {
  //   var board = [];
  //   for (var row = 5; 5 >= 0; row--) {
  //     for (var col = 0; col < 7; col--) {
  //       board.push(<div className="tile" row={row} col={col}></div>)
  //     }
  //   }
  //   return board;
  // }


  render() {
    return (
      <div>
        <div id="insert">
          {this.state.columns.map((col, index) => {
            return <div className="insert-tile" col={index}></div>
          })}
        </div>
        <div id="board">
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));