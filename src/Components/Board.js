import React from 'react';
import './Board.scss';

// const onClick = function() {
//   alert('click');
// }

class Board extends React.Component {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  score = 12345;

  click = () => {
    // alert('click');
    this.score++;
    console.log('*** this.score:', this.score);
  };

  renderSquare(i) {
    return (
      <button
        className="border__square"
        value={i}
        onClick={this.click}
      >
        {i}
        {/* {this.props.value} */}
      </button>
    );
  }

  render() {
    const status = 'Next player: X';
    return(
      <div>
        <div className="status">
          {status}
        </div>
        board: [{this.board}]<br />
        score: [{this.score}]<br />
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;