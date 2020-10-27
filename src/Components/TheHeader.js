import React from 'react';
import './TheHeader.scss';

class TheHeader extends React.Component {
  render() {
    return (
      <header>
        <img
          className="header__image"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="ReactJS"
        />
        <div className="header__name">
          Tic Tac Toe using
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/andypike7/"
          target="_blank"
          className="header__avatar"
          title="Author's profile at habr.com."
          rel="noopener noreferrer"
          >
          <img
            src="images/avatar-mini.png"
            alt="Author's avatar"
          />
        </a>
      </header>
    );
  };
}

export default TheHeader;