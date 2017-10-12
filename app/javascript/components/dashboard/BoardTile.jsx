import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const BoardTile = (props) => (
  <li className="board-tile">
    <Link to={`/boards/${props.id}`}>
      <span className="board-title">{props.title}</span>
    </Link>
  </li>
);

BoardTile.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired
};

export default BoardTile;
