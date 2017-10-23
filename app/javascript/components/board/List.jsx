import React from 'react';
import PropTypes from 'prop-types';
import CardsSummariesContainer from './CardsSummariesContainer'

const List = (props) => {
  const list = props.list;

  return (
    <div className="list-wrapper">
        <div className="list-background">
            <div className="list">
                <a className="more-icon sm-icon" href=""></a>
                <div>
                    <p className="list-title">{list.title}</p>
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
                <div className="add-card-toggle" data-position="bottom">Add a card...</div>
            </div>
        </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.object.isRequired,
};

export default List;
