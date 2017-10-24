import React from 'react';
import PropTypes from 'prop-types';

const ListTitle = (props) => (
  <p
    className="list-title"
    onClick={props.onClick}
  >
    {props.title}
  </p>
);

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListTitle;
