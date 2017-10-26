import React from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';

import List from './List';

const Lists = (props) => {
  const lists = props.lists.map((list) => (
    <List
      key={list.id}
      list={list}
      onDrop={(event) => handleOnDrop(event, list.id)}
    />
  ));

  const onDropEvent = new Event("drop", {"bubbles":true, });

  const handleOnDrop = (event, id) => {
    console.log(event, id);
  }

  const dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      const drake = Dragula([componentBackingInstance], options);
      drake.on('drop', (el, target, source, sibling) => 
        el.dispatchEvent(onDropEvent));
    }
  };

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists" ref={dragulaDecorator}>
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
