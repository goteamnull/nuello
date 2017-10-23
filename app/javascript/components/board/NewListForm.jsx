import React from 'react';

const NewListForm = (props) => (
  <div id="new-list" className="new-list {props.selected ? 'selected': ''}">
    <span>Add a list...</span>
    <input type="text" placeholder="Add a list..." />
    <div>
      <input type="submit" className="button" value="Save" />
      <i className="x-icon icon"></i>
    </div>
  </div>
);

export default NewListForm;
