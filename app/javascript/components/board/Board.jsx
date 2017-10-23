import React from 'react';
import PropTypes from 'prop-types';

import ListsContainer from './ListsContainer.jsx';

const Board = (props) => {
  return (
    <div>
      <header>
        <ul>
          <li id="title">{props.board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu</div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed</div>
      </header>
      <main>
        <ListsContainer boardId={props.board.id} />
      </main>
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.object.isRequired
};


export default Board;