import React from 'react';
import './Board.scss';
import Square from './Square';

class Board extends React.Component {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  score = 12345;

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">
          {status}
        </div>
        board: [{this.board}]<br />
        score: [{this.score}]<br />
        <div className="board">
          <Square value="0" />
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
          <Square value="7" />
          <Square value="8" />
        </div>
      </div>
    );
  }
}

export default Board;