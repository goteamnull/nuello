import React from 'react';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';
import PositionCalculator from '../../lib/PositionCalculator'

import List from './List';
import NewListFormContainer from './NewListFormContainer';

const Lists = (props) => {
  const listsClone = props.lists.slice();
  const lists = listsClone.sort((a, b) => a.position - b.position)
    .map((list) => {
      const activeDropdown = (list.id === props.activeDropdownListId);
      return(
        <List
          key={list.id}
          list={list}
          onDrop={(event) => handleOnDrop(event, list.id)}
          toggleActiveDropdown={props.toggleActiveDropdown}
          activeDropdown={activeDropdown}
        />
      );
    });

  // onDrop in the List component will respond to any
  // event named 'drop' targeting that element
  const onDropEvent = new Event("drop", {"bubbles":true, });

  const getOriginalPositionOfList = (id) => {
    const listsClone = props.lists.slice();
    return listsClone.sort((a, b) => a.position - b.position)
      .findIndex((list) => list.id === id);
  }

  const getTargetPosition = (event) => {
    const parent = event.target.parentNode;
    const children = parent.childNodes;
    let targetPosition;

    for (let i = 0; i < children.length; i++) {
      if (event.target === children[i]) {
        targetPosition = i;
      }
    }

    return targetPosition;
  }

  const handleOnDrop = (event, id) => {
    const originalPosition = getOriginalPositionOfList(id);
    const targetPosition = getTargetPosition(event);
    const calculatedPosition = PositionCalculator(props.lists, targetPosition, originalPosition);

    props.updatePosition(id, calculatedPosition);
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
