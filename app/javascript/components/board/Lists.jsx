import React from 'react';
import PropTypes from 'prop-types';

const Lists = (props) => {
  const lists = props.lists.map((list) => {
    <List list={list} />
  });

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists}
      </div>
    </div>
  );
};

// Lists.propTypes = {
//   lists: PropTypes.object.isRequired
// };

export default Lists;
