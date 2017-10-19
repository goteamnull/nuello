import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

const Lists = (props) => {
  const lists = props.lists.map((list) => (
    <List 
      key={list.id}
      list={list}
    />
  ));

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists}
      </div>
    </div>
  );
};

Lists.propTypes = {
  store: PropTypes.object,
  lists: PropTypes.array,
};

export default Lists;
