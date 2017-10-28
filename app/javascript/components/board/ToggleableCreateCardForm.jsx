import React from 'react';

const ToggleableCreateCardForm = (props) => {
  const getClassName = () => {
    if (props.activeDropdown) {
      return 'add-dropdown add-bottom active-card';
    } else {
      return 'add-dropdown add-bottom';
    }
  };

  return (
    <div className={getClassName()}>
      <div className="card"><div className="card-info"></div>
      <textarea name="add-card" onChange={props.handleTextChange} value={props.title}></textarea>
      <div className="members"></div></div>
      <a className="button" onClick={props.handleSaveClick}>Add</a>
      <i className="x-icon icon" onClick={props.handleFormCloseClick}></i>
      <div className="add-options"><span>...</span>
      </div>
    </div>
  );
};

export default ToggleableCreateCardForm;