import React from 'react';
import './Board.scss';
import Square from './Square';

class Board extends React.Component {
  score = 12345;

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(squareId) {
    const squares = [...this.state.squares];
    squares[squareId] = 'X';
    this.setState({squares});
  }

  renderSquare(squareId) {
    return (
      <Square
        value={this.state.squares[squareId]}
        onClick={() => this.handleClick(squareId)}
      />
    );
  }

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