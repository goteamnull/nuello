import React from 'react';
import PropTypes from 'prop-types';

import CardsSummariesContainer from './CardsSummariesContainer';
import ToggleableListTitle from './ToggleableListTitle';
import ToggleableCreateCardFormContainer from './ToggleableCreateCardFormContainer';

const List = (props) => {
  const list = props.list;

  const getClassName = () => {
    if (props.activeDropdown) {
      return 'list-wrapper add-dropdown-active';
    } else {
      return 'list-wrapper';
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    props.toggleActiveDropdown(list.id);
  }

  return (
    <div className={getClassName()} onDrop={props.onDrop}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <ToggleableListTitle
              id={list.id}
              title={list.title}
            />
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
            <div className="add-options"><span>...</span>
            </div>
          </div>
          <CardsSummariesContainer listId={list.id}/>
          <div className="add-dropdown add-bottom">
            <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
            <a className="button">Add</a><i className="x-icon icon"></i>
            <div className="add-options"><span>...</span>
            </div>
          </div>
          <ToggleableCreateCardFormContainer 
            listId={list.id}
            toggleActiveDropdown={props.toggleActiveDropdown}
            activeDropdown={props.activeDropdown}
          />
          <div 
            className="add-card-toggle" 
            data-position="bottom" 
            onClick={handleAddClick}
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
