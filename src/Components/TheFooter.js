import React from 'react';
import './TheFooter.scss';

class TheFooter extends React.Component {
  render() {
    return (
      <footer>
        Copyright &copy;
        <a
          href={"https://habr.com/ru/users/andypike/"}
          title={"Author's profile at Habr.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Andy Pike
        </a>
        2020
      </footer>
    );
  };
}

export default TheFooter;