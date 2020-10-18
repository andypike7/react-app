import React from 'react';
import Board from './Board';
import './Game.scss';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>STATUS</div>
          <div>ACTIONS LIST</div>
        </div>
      </div>
    );
  }
}

export default Game;