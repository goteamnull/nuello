import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import NewListFormContainer from './NewListFormContainer';

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
      <NewListFormContainer boardId={props.boardId} />
    </div>
  );
};

Lists.propTypes = {
  store: PropTypes.object,
  lists: PropTypes.array,
  boardId: PropTypes.number.isRequired
};

export default Lists;
