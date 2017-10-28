import React from 'react';
import PropTypes from 'prop-types';

const ListTitle = (props) => (
  <p
    className="list-title"
    onDoubleClick={props.onDoubleClick}
  >
    {props.title}
  </p>
);

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
};

export default ListTitle;
