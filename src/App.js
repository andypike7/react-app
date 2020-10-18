import React from 'react';
// import logo from './logo.svg';
// import Greetings from './Greetings/Greetings';
// import ShoppingList from './ShoppingList/ShoppingList';
// import Board from './Components/Board';
import TheHeader from './Components/TheHeader';
import Game from './Components/Game';
import TheFooter from './Components/TheFooter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Game />
      <TheFooter />
    {/* <Board />
      <Greetings firstName="Andy" lastName="Pike" />
      <ShoppingList name="Andy" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
